import express, { Express } from "express";
import uploadRouter from "./src/controllers/upload-file.controller";
import fileRouter from "./src/controllers/getfile.controller";
import cityRouter from "./src/controllers/cities-crud.controller";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app: Express = express();
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Firebase demo App of nodejs-db-demo Project.");
});

app.use("/upload", uploadRouter);
app.use("/files", fileRouter);
app.use("/city", cityRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
