import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();

  if (!token) throw new AppError("Unauthorized! There is no token.", 401);

  const user = jwt.verify(token, process.env.JWT_SECRET as string);

  if (!user) throw new AppError("User not found.", 401);

  res.locals.user = user;
  next();
}
