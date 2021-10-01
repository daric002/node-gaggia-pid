import { createClient } from "redis";
import { promisify } from "util";

const redisClient = createClient();

export const getAsync = promisify(redisClient.get).bind(redisClient);
export const setAsync = promisify(redisClient.set).bind(redisClient);
