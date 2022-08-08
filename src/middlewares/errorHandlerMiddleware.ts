import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError.js";

export default async function handleError(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  if (error instanceof AppError) {
    return res.status(error.statusCode).send({ message: error.message });
  }

  return res.status(500).send("Internal Server Error");
}
