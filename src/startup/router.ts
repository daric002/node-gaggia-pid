import express from "express";
import hello from "../routes/hello-world";

export const router = express.Router();

router.get("/", hello);
