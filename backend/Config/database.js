import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://yugesh:yugesh%4012@expense.htu5i.mongodb.net/quikieapps?retryWrites=true&w=majority"
    )
    .then((c) => {
      console.log(`Mongo db is connnected to : ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
