import { Router } from "express";

import { createJob } from "../controllers/jobsController.js";
//import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
//import { userSchema, loginSchema } from "../schemas/authSchema.js";

const jobsRouter = Router();

jobsRouter.post("/jobs", createJob);

export default jobsRouter;
