import * as dotenv from "dotenv";
dotenv.config();

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

const Config = {
  email: getEnvVar("EMAIL"),
  password: getEnvVar("PASSWORD"),
  eventName: getEnvVar("EVENT_NAME"),
};

export default Config;
