import path from "path";
import pino from "pino";
import { __dirname, ENV, LOG_LEVEL, LOGFILE } from "../config/config.mjs";

const transport = {
  targets: [
    {
      target: "pino/file",
      options: {
        destination: path.join(__dirname, LOGFILE),
      },
    },
  ],
};

const pinoPrettyTransport = {
  target: "pino-pretty",
  options: {
    colorize: true,
  },
};

// enable pino pretty if in dev mode
if (ENV === "development") transport.targets.push(pinoPrettyTransport);

export const logger = pino({
  level: LOG_LEVEL,
  transport,
});
