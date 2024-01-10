import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import PostRoute from "./src/routes/PostRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(PostRoute);

app.listen(5000, ()=> console.log('Server Up and running'))