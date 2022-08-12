import { Request, Response } from "express";

import { applicationData } from "../services/applicationsServices.js";
import * as applicationsServices from "../services/applicationsServices.js";

export async function createNewApplication(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const data: applicationData = req.body;
  console.log(userId, data);
  await applicationsServices.createNewApplication(userId, data);

  res.sendStatus(201);
}
