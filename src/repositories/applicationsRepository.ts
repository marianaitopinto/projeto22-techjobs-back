import { prisma } from "../database.js";
import { applicationData } from "../services/applicationsServices.js";

export async function createApplication(userId: number, data: applicationData) {
  return prisma.user_job.create({
    data: {
      cadidateId: userId,
      jobId: data.jobId,
      status: data.status,
    },
  });
}

export async function checkCandidateAlreadyApplied(
  userId: number,
  jobId: number
) {
  return prisma.user_job.findFirst({
    where: {
      cadidateId: userId,
      jobId,
    },
  });
}
