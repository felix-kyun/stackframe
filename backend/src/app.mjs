import express from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
import { logger } from "./misc/logger/logger.mjs";
import { ENV, PORT } from "./misc/config/config.mjs";
import helmet from "helmet";
import { httpLogger } from "./misc/logger/httpLogger.mjs";

/* start server */
logger.info("Starting server...");

/* import Routers */

const app = express();

/* Middleware */
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(pinoHttp(httpLogger));

/* Routes */

/* Testing Routes */

/* Not Found  */

/* Error Handler */

/* MongoDB Connection */

/* Start Server */
if (ENV !== "test")
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });

export default app;
