import { logger } from "../logger/logger.mjs";

process.on("SIGINT", () => {
  logger.fatal("SIGINT signal received");
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.fatal("SIGTERM signal received");
  process.exit(0);
});

process.on("uncaughtException", (err) => {
  logger.fatal("Uncaught Exception: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  logger.fatal("Unhandled Rejection at: ", promise, "reason: ", reason);
  process.exit(1);
});

process.on("exit", (code) => {
  logger.info(`Process exited with code: ${code}`);
});
