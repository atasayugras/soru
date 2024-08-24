//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const answer = "ckish";

// Obtain the current module's directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public")); // Without this code, browser cannot see the external CSS file
app.use(bodyParser.urlencoded({ extended: true }));
let userAnswer = "";

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/check", (req, res) => {
  userAnswer = req.body.answer;
  if (userAnswer === answer) {
    res.sendFile(`${__dirname}/public/secret.html`);
  }
});

/*
 *1- Import express
 *2- Create app const to use express
 *3- Listen to port 3000
 *4- Import dirname for dynamic path
 *5- Import fileURLToPath from url
 *6- Respond with sendFile __dirname/public/index.html
 *7- Add route handlers GET and POST
 *8- Make sure that get responds with index.html
 *9- Import body-parser
 *10- Use body-parser
 *11- Create variable for password.
 *12- Create variable for user inputed password using body parser
 *13- Make sure post handles the correct route which will come from the input's action attribute.
 *14- Make sure that POST checks the string value that comes from password input, if the submitted value for password matches the password that you want.
 *15- Inside post route handler, respond with send file secret.html
 */
