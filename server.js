import path from "path";
import express from "express";

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");
const PORT = process.env.PORT || 8080;

class Application {
  static start() {
    return new Application();
  }

  constructor() {
    this.app = express();
    this.instantiateControllers();
    this.startServer();
  }

  startServer() {
    this.app.use(express.static(DIST_DIR));
    this.app.get("*", (req, res) => {
      res.sendFile(HTML_FILE);
    });
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }

  instantiateControllers() {
    //For future controllers
  }
}

Application.start();
