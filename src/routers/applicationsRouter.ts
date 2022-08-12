import { Router } from "express";

import { createNewApplication, getApplication } from "../controllers/applicationsController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema, loginSchema } from "../schemas/authSchema.js";

const applicationsRouter = Router();

applicationsRouter.post("/application", validateToken, createNewApplication);
applicationsRouter.get("/application/:jobId", validateToken, getApplication);

export default applicationsRouter;
