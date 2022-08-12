import { Request, Response } from "express";

import { jobs } from "@prisma/client";
import { jobsData } from "../services/jobsServices";

import * as jobsService from "../services/jobsServices.js";

export async function createJob(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const data: jobsData = req.body;

  await jobsService.createJob(userId, data);

  res.sendStatus(201);
}

export async function updateJob(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const { jobId } = req.params;
  const data: jobs = req.body;

  await jobsService.updateJob(parseInt(jobId), data, userId);

  res.sendStatus(200);
}

export async function getJobById(req: Request, res: Response) {
  const { jobId } = req.params;

  const job = await jobsService.getJob(parseInt(jobId));

  res.send(job);
}

export async function getJobByCompany(req: Request, res: Response) {
  const { companyId } = req.params;

  const jobs = await jobsService.getJobsByCompany(parseInt(companyId));

  res.send(jobs);
}
