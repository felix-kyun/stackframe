import path from "path";
import { __dirname, LOGFILE } from "../config/config.mjs";

export const logFileTransport = {
  target: "pino/file",
  options: {
    destination: path.join(__dirname, LOGFILE),
  },
};
