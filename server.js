import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config();
//de and authenticateuser
import connectDb from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import appointRouter from "./routes/appointRoutes.js";

// Middleware
import notFoundMiddleware from "./middleware/not_found.js";
import errorHandlerMiddleware from "./middleware/error_handler.js";

app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("WELCOM YOOH!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/appointment", appointRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
