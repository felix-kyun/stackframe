import express from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
import { logger } from "./misc/logger/logger.mjs";
import { PORT } from "./misc/config/config.mjs";
import helmet from "helmet";

/* import Routers */

const app = express();

/* Middleware */
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(pinoHttp(logger));

/* Routes */

/* Testing Routes */

/* Not Found  */

/* Error Handler */

/* MongoDB Connection */

/* Start Server */
app.listen(PORT, () => logger.info("server started"));

export default app;
