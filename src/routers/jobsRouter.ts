import { Router } from "express";

import {
  createJob,
  updateJob,
  getJobById,
  getJobByCompany,
} from "../controllers/jobsController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
//import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
//import { userSchema, loginSchema } from "../schemas/authSchema.js";

const jobsRouter = Router();

jobsRouter.post("/jobs", validateToken, createJob);
jobsRouter.put("/jobs/:jobId", validateToken, updateJob);
jobsRouter.get("/jobs/:jobId", validateToken, getJobById);
jobsRouter.get("/jobs/all/:companyId", getJobByCompany);

export default jobsRouter;
