import { Coin } from "./coinModel.js";
import fetch from "node-fetch";

export const addToDb = async (req, res) => {
  try {
    const { name, uuid, marketCap, symbol, price } = req.body;

    const coin = await Coin.create({
      name,
      marketCap,
      symbol,
      uuid,
      price,
    });

    res.status(201).json({
      success: true,
      coin,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getData = async (req, res) => {
  const coins = await Coin.find();
  res.status(201).json(coins);
};
export const deleteDb = async (req, res) => {
  console.log(req.params.id);
  try {
    const coin = await Coin.findById(req.params.id);
    if (!coin) {
      return res.status(404).json({
        success: false,
        message: "Coin does not exist",
      });
    }

    await coin.remove();
    res.status(200).json({
      success: true,
      message: "coin deleted sucessfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchData = async (req, res) => {
  const url = "https://api.coinranking.com/v2/coins";
  (async () => {
    try {
      await fetch(`${url}`, {
        headers: { "x-access-token": `${process.env.COIN_API}` },
      })
        .then((response) => response.json())
        .then((json) => {
          res.json(json);
        });
    } catch (error) {
      console.log(error);
    }
  })();
};
