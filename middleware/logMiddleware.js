const logger = require("./logger");

function logMiddleware(req, res, next) {
  const logMessage = {
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    timestamp: new Date().toISOString(),
  };

  logger.info(`Request: ${JSON.stringify(logMessage)}`);

  const originalSend = res.send.bind(res);

  res.send = function (body) {
    let responseBody = body;
    if (Buffer.isBuffer(body)) {
      responseBody = body.toString("utf8");
    } else if (typeof body === "object") {
      responseBody = JSON.stringify(body);
    }

    const responseLog = {
      statusCode: res.statusCode,
      body: responseBody,
      timestamp: new Date().toISOString(),
    };

    logger.info(`Response: ${JSON.stringify(responseLog)}`);

    return originalSend(body);
  };

  next();
}

module.exports = logMiddleware;
