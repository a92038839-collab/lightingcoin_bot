require("dotenv").config();

const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

const PORT = process.env.PORT || 3000;

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true
});

app.get("/", (req, res) => {
  res.send("LIGHTING COIN BOT IS RUNNING ⚡🪙");
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "⚡ LIGHTING COIN 🪙\n\nBot ishga tushdi!"
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});