import { Router } from "express";

import authRouter from "./authRouter.js";
import jobsRouter from "./jobsRouter.js";
import applicationsRouter from "./applicationsRouter.js";

const routers = Router();

routers.use(authRouter);
routers.use(jobsRouter);
routers.use(applicationsRouter);

export default routers;