import { users } from "@prisma/client";
import * as userRepository from "../repositories/userRepository.js";
import { AppError } from "../errors/appError.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const SALT_ROUNDS = 10;

export type userData = Omit<users, "id">;

export async function createUser(data: userData) {
  const checkEmail = await userRepository.findUserByEmail(data.email);
  if (checkEmail) throw new AppError("E-mail is already registered", 409);

  data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  await userRepository.insertUser(data);
}

export async function signIn({ email, password }) {
  const user = await userRepository.findUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new AppError("E-mail or password is incorrect", 401);

  const token = await generateToken(user);

  return token;
}

async function generateToken(user: users) {
  const token = jwt.sign({ id: user.id }, (process.env.JWT_SECRET as string));
  
  return token;
}
