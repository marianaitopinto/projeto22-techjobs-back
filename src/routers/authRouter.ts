import { Router } from "express";

import { signUp } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(userSchema), signUp);
//authRouter.post("/sign-in", signIn);

export default authRouter;
