import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT } from "./config.js";
import { MONGODB_URI } from "./config.js";
import ProductsRoutes from "./routes/ProductsRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Uniconfort's Api");
});
app.use("/products", ProductsRoutes);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
