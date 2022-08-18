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

export async function getApplication(userId: number, jobId: number) {
  return prisma.user_job.findFirst({
    where: {
      cadidateId: userId,
      jobId,
    },
  });
}

export async function updateApplication(id: number, status: string) {
  return prisma.user_job.update({
    where: { id },
    data: { status },
  });
}

export async function leaveApplication(id: number) {
  return prisma.user_job.update({
    where: { id },
    data: { status: "abdicated" },
  });
}

export async function getAllApplications(id: number) {
  return prisma.user_job.findMany({
    where: {
      cadidateId: id,
    },
    select: {
      job: true,
    },
  });
}

export async function getAllApplicationsByJobId(jobId: number) {
  return prisma.user_job.findMany({
    where: {
      jobId,
    },
    select: {
      user: true,
    },
  });
}
