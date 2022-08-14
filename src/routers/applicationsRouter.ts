import { Router } from "express";

import {
  createNewApplication,
  getApplication,
  updateApplication,
  leaveApplication,
  getAllAplications
} from "../controllers/applicationsController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema, loginSchema } from "../schemas/authSchema.js";

const applicationsRouter = Router();

applicationsRouter.post("/application", validateToken, createNewApplication);
applicationsRouter.get("/application/job/:jobId", validateToken, getApplication);
applicationsRouter.put("/application", validateToken, updateApplication);
applicationsRouter.post("/application/leave/:jobId", validateToken, leaveApplication)
applicationsRouter.get("/application/all", validateToken, getAllAplications);

export default applicationsRouter;
