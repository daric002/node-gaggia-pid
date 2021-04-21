import express from "express";
import dotenv from "dotenv";
import { router } from "./startup/router";
import pino from "pino-http";

dotenv.config();
const app = express();
const logger = pino();

app.use(logger);
app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
});
