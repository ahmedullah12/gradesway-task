import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

const app: Application = express();

//middlewares
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.use("/api", router);


export default app;
