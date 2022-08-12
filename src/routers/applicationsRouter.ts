import { Router } from "express";

import { createNewApplication } from "../controllers/applicationsController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema, loginSchema } from "../schemas/authSchema.js";

const userJobRouter = Router();

userJobRouter.post("/application", validateToken, createNewApplication);

export default userJobRouter;
