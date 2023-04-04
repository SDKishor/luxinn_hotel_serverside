import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRouth from "./routes/authRouth.js";
import restaurantRouth from "./routes/restaurantRouth.js";
const app = express();
dotenv.config();

async function connect() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("connect to mongo");
}

//middlewares
app.use(express.json());
app.use(cors());

app.use("/auth", authRouth);
app.use("/restaurant", restaurantRouth);

//errorhandeler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect().catch((err) => console.log(err));
  console.log("connected to backend");
});
