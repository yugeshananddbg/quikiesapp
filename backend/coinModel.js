import mongoose from "mongoose";
const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  symbol: String,
  marketCap: String,
  price: String,
  inMyDb: {
    type: Boolean,
    default: true,
  },
});
export const Coin = mongoose.model("Coin", coinSchema);
