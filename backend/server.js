
import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./Config/database.js";
dotenv.config({ path: "./backend/Config/config.env" });

connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(`Server is working on port : ${process.env.PORT}`);
});
