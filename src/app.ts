import cors from "cors";
import express from "express";
import "express-async-errors";

import routers from "./routers/index.js";
import handleError from "./middlewares/errorHandlerMiddleware.js";

const app = express();

app.use(express.json());
app.use(routers);
app.use(handleError);

export default app;
