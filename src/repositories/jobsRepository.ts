import { jobs } from "@prisma/client";
import { prisma } from "../database.js";
import { jobsData } from "../services/jobsServices.js";

export async function checkIsCompany(id: number, type: number) {
  return prisma.users.findFirst({ where: { id, type: 2 } });
}

export async function createJob(companyId: number, data: jobsData) {
  return prisma.jobs.create({
    data: {
      companyId,
      jobTitle: data.jobTitle,
      description: data.description,
      status: data.status,
    },
  });
}

export async function updateJob(
  id: number,
  jobTitle: string,
  description: string,
  status: string
) {
  return prisma.jobs.update({
    where: { id },
    data: { jobTitle, description, status },
  });
}

export async function findJobById(id: number) {
  return prisma.jobs.findFirst({ where: { id } });
}
