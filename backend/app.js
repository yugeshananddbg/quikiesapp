import express from "express";
import cors from "cors";
import { coinRouter } from "./coinRouter.js";
import path from "path";
export const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", coinRouter);

app.use(express.static("./frontend/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
