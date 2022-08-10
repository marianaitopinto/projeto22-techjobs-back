import { Router } from "express";

import { createJob, updateJob, getJobById } from "../controllers/jobsController.js";
//import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
//import { userSchema, loginSchema } from "../schemas/authSchema.js";

const jobsRouter = Router();

jobsRouter.post("/jobs", createJob);
jobsRouter.put("/jobs/:jobId", updateJob);
jobsRouter.get("/jobs/:jobId", getJobById)

export default jobsRouter;
