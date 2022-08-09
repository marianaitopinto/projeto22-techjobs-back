import { Request, Response } from "express";
import { userData } from "../services/authServices.js";

import * as authService from "../services/authServices.js";

export async function signUp(req: Request, res: Response) {
  const data: userData = req.body;

  await authService.createUser(data);

  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  const token = await authService.signIn({ email, password });

  res.status(200).send(token);
}
