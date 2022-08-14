import { jobs } from "@prisma/client";
import * as jobsRepository from "../repositories/jobsRepository.js";
import * as userRepository from "../repositories/userRepository.js";
import { AppError } from "../errors/appError.js";

const COMPANY_TYPE = 2;

export type jobsData = Omit<jobs, "id" | "createdAt">;

export async function createJob(userId: number, data: jobsData) {
  const user = await userRepository.checkUserExist(userId);
  if (!user) throw new AppError("Register not found!", 404);

  checkIsCompany(user.type);

  await jobsRepository.createJob(userId, data);
}

export async function updateJob(jobId: number, data: jobsData, userId: number) {
  const job = await jobsRepository.findJobById(jobId);
  if (!job) throw new AppError("Job not found", 404);

  const user = await userRepository.checkUserExist(userId);
  if (!user) throw new AppError("Register not found!", 404);

  isUserIdSameCompanyId(data.companyId, userId);

  await jobsRepository.updateJob(
    jobId,
    data.jobTitle,
    data.description,
    data.status
  );
}

export async function getJob(jobId: number) {
  const job = await jobsRepository.findJobById(jobId);
  if (!job) throw new AppError("Job not found", 404);

  return job;
}

export async function getJobsByCompany(companyId: number) {
  const company = await userRepository.checkUserExist(companyId);
  if (!company) throw new AppError("Company not found!", 404);

  const jobs = await jobsRepository.findJobsByCompany(companyId);
  if (!jobs) throw new AppError("Registers not found!", 404);

  return jobs;
}

export async function getJobsOpened() {
  const jobs = await jobsRepository.findAllJobsOpened();
  if (!jobs) throw new AppError("Registers not found!", 404);

  return jobs;
}

function checkIsCompany(id: number) {
  if (id !== COMPANY_TYPE) {
    throw new AppError("Unauthorized!", 401);
  } else {
    return;
  }
}

function isUserIdSameCompanyId(companyId: number, userId: number) {
  if (companyId !== userId) {
    throw new AppError("Unauthorized!", 401);
  } else {
    return;
  }
}
