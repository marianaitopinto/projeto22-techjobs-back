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

function checkIsCompany(id: number) {
  if (id !== COMPANY_TYPE) {
    throw new AppError("Unauthorized!", 401);
  } else {
    return;
  }
}
