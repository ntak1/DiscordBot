require("dotenv").config(); // Recommended way of loading dotenv
import container from "./di/inversify.config";
import { TYPES } from "./di/types";
import { Bot } from "./bot";
let bot = container.get<Bot>(TYPES.Bot);
bot
  .listen()
  .then(() => {
    console.log("Logged in!");
  })
  .catch((error) => {
    console.log("Oh no! ", error);
  });
