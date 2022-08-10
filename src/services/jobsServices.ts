import { jobs } from "@prisma/client";
import * as jobsRepository from "../repositories/jobsRepository.js";
import * as userRepository from "../repositories/userRepository.js";
import { AppError } from "../errors/appError.js";

const COMPANY_TYPE = 2;

export type jobsData = Omit<jobs, "id" | "createdAt">;

export async function createJob(data: jobsData) {
  const user = await userRepository.checkUserExist(data.companyId);
  if (!user) throw new AppError("Register not found!", 404);

  checkIsCompany(data.companyId);

  console.log(user.type);

  await jobsRepository.createJob(data);
}

export async function updateJob(jobId, data: jobsData) {
  const job = await jobsRepository.findJobById(jobId);
  if (!job) throw new AppError("Job not found", 404)
  
  const user = await userRepository.checkUserExist(data.companyId);
  if (!user) throw new AppError("Register not found!", 404);

  await jobsRepository.updateJob(jobId, data.jobTitle, data.description, data.status);
}

export async function getJob(jobId: number) {
  const job = await jobsRepository.findJobById(jobId);
  if (!job) throw new AppError("Job not found", 404);

  return job;
}

function checkIsCompany(id: number) {
  if (id !== COMPANY_TYPE) {
    throw new AppError("Unauthorized!", 401);
  } else {
    return;
  }
}
