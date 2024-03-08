import express from "express";
import bodyParser from "body-parser";
import bookRoute from "./routes/books";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/books", bookRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
