const path = require("path");
// Routes

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../index.html"));
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
