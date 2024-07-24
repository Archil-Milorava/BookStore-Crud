import express from "express";
import mongoose from "mongoose";
import booksRouter from "./routes/booksRoute.js";
import { DB, PORT } from "./server.js";
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors());

app.use('/books', booksRouter)



app.get("/", (req, res) => {
  res.status(200).send("hellooo bro");
});

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`hello from ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
