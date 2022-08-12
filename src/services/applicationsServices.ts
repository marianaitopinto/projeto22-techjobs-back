import { user_job } from "@prisma/client";
import * as userRepository from "../repositories/userRepository.js";
import * as jobsRepository from "../repositories/jobsRepository.js";
import * as applicationsRepository from "../repositories/applicationsRepository.js";
import { AppError } from "../errors/appError.js";

const USER_TYPE = 1;
const COMPANY_TYPE = 2;

export type applicationData = Omit<user_job, "id">;

export async function createNewApplication(userId, data: applicationData) {
  const user = await userRepository.checkUserExist(userId);
  if (!user) throw new AppError("Register not found!", 404);

  const job = await jobsRepository.findJobById(data.jobId);
  if (!job) throw new AppError("Job not found!", 404);

  checkIsCandidate(user.type);
  const application = await applicationsRepository.getApplication(
    userId,
    data.jobId
  );
  console.log(application);
  if (application)
    throw new AppError("You have already applied for this job!", 401);

  await applicationsRepository.createApplication(userId, data);
}

export async function getApplication(userId: number, jobId: number) {
  const user = await userRepository.checkUserExist(userId);
  if (!user) throw new AppError("Register not found!", 404);

  const job = await jobsRepository.findJobById(jobId);
  if (!job) throw new AppError("Job not found!", 404);

  checkIsCandidate(user.type);

  const application = await applicationsRepository.getApplication(
    userId,
    jobId
  );

  if (!application)
    throw new AppError("You have not applied for this job!", 401);

  return application;
}

export async function updateApplication(userId: number, data: user_job) {
  const user = await userRepository.checkUserExist(userId);
  if (!user) throw new AppError("Register not found!", 404);

  const job = await jobsRepository.findJobById(data.jobId);
  if (!job) throw new AppError("Job not found!", 404);

  checkCompanyOwnsJob(user.type, userId, job.companyId);

  const application = await applicationsRepository.getApplication(
    data.cadidateId,
    data.jobId
  );

  if (!application)
    throw new AppError("The user have not applied for this job!", 401);

  await applicationsRepository.updateApplication(application.id, data.status);
}

function checkIsCandidate(type: number) {
  if (type !== USER_TYPE) {
    throw new AppError("Unauthorized! Only candidates can apply.", 401);
  } else {
    return;
  }
}

function checkCompanyOwnsJob(id: number, userId: number, companyId: number) {
  if (id !== COMPANY_TYPE || userId !== companyId) {
    throw new AppError("Unauthorized!", 401);
  } else {
    return;
  }
}
