import path from "path";
import pino from "pino";
import { __dirname, ENV, LOG_LEVEL } from "../config/config.mjs";
import { logFileTransport } from "./logFileTransport.mjs";
import { pinoPrettyTransport } from "./stdoutPrettyTransport.mjs";

const pinoConfig = {
  level: LOG_LEVEL,
  transport: {
    targets: [logFileTransport],
  },
  serializers: {},
};

// enable pino pretty if in dev mode
if (ENV === "development") {
  pinoConfig.transport.targets.push(pinoPrettyTransport);
}

export const logger = pino(pinoConfig);
