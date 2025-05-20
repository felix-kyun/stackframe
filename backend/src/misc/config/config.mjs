import { config } from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const fileExtensions = {
  development: ".env.development",
  production: ".env",
  test: ".env.test",
};

export const ENV = process.env.NODE_ENV || "development";

/* export dirname */
// export const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const __dirname = path.resolve(path.dirname(process.argv[1]), "../");

/* load config file */
config({
  path: fileExtensions[ENV],
});

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI;
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
export const JWT_SECRET = process.env.JWT_SECRET;
export const LOGFILE = process.env.LOGFILE || "app.log";
export const LOG_LEVEL = process.env.LOG_LEVEL || "info";
