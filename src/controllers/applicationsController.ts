import { Request, Response } from "express";

import { applicationData } from "../services/applicationsServices.js";
import * as applicationsServices from "../services/applicationsServices.js";
import { user_job } from "@prisma/client";

export async function createNewApplication(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const data: applicationData = req.body;
  console.log(userId, data);
  await applicationsServices.createNewApplication(userId, data);

  res.sendStatus(201);
}

export async function getApplication(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const { jobId } = req.params;

  const application = await applicationsServices.getApplication(userId, parseInt(jobId));

  res.send(application);
}

export async function updateApplication(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const data: user_job = req.body;

  await applicationsServices.updateApplication(userId, data)

  res.sendStatus(200);
}