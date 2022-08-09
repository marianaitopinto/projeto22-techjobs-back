import { Router } from "express";

import { signUp, signIn } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema, loginSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(userSchema), signUp);
authRouter.post("/sign-in", validateSchemaMiddleware(loginSchema), signIn);

export default authRouter;
