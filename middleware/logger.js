// This middleware logs the request method and URL to the console
// It uses the `req` object to access the request method, protocol, host, and original URL
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};

module.exports = logger;
