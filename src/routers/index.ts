import { Router } from "express";

import authRouter from "./authRouter.js";
import jobsRouter from "./jobsRouter.js";
import userJobRouter from "./applicationsRouter.js";

const routers = Router();

routers.use(authRouter);
routers.use(jobsRouter);
routers.use(userJobRouter);

export default routers;