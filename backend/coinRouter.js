import express from "express";
import { addToDb, deleteDb, fetchData, getData } from "./coinController.js";
export const coinRouter = express.Router();

coinRouter.route("/add/coin").post(addToDb);
coinRouter.route("/coins").get(getData);
coinRouter.route("/fetch").get(fetchData);
coinRouter.route("/delete/:id").delete(deleteDb);
