// error handler function
function errorHandler(err, req, res, next) {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    description:
      "A generic error message, given when no more specific message is suitable",
    data: {
      title: err.name,
      body: err.message,
    },
  });
}

module.exports = errorHandler;
