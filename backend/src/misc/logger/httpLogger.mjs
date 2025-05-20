import { logger } from "./logger.mjs";
import { prettySerializer } from "./prettySerializer.mjs";

export const httpLogger = {
  logger,
  serializers: {
    ...prettySerializer,
  },
};
