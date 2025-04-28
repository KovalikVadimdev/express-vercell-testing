const winston = require("winston");
require("winston-mongodb");
require("dotenv").config();

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.MongoDB({
      db: process.env.MONGODB_URI,
      collection: "logs",
      tryReconnect: true,
      level: "info",
      storeHost: true,
    }),
  ],
});

module.exports = logger;
