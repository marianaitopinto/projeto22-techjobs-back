import { Request, Response } from "express";

import { jobsData } from "../services/jobsServices";

import * as jobsService from "../services/jobsServices.js";

export async function createJob(req: Request, res: Response) {
  const data: jobsData = req.body;

  await jobsService.createJob(data);

  res.sendStatus(201);
}
