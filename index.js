import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import _ from "lodash";

const app = express();
const port = 3000;
const answer = "ckish";

// Obtain the current module's directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the public directory
app.use(express.static("public")); // This serves static files in /public
app.use(bodyParser.urlencoded({ extended: true }));
let userAnswer = "";

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/views/index.html`);
});

app.post("/check", (req, res) => {
  userAnswer = _.toLower(req.body.answer);
  if (userAnswer === answer) {
    res.sendFile(`${__dirname}/public/views/true.html`);
  } else {
    res.sendFile(`${__dirname}/public/views/false.html`);
  }
});
