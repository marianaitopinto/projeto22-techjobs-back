import { Router } from "express";

import authRouter from "./authRouter.js";
import jobsRouter from "./jobsRouter.js";
const routers = Router();

routers.use(authRouter);
routers.use(jobsRouter);

export default routers;