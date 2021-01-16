import { Message } from "discord.js";
import { Villagers } from "../data/villagers";
import { Handler } from "../types";

const TOKEN = {
  all: 3,
  marriage: 4,
}

export class ListHandler implements Handler {
  public handle(tokens: string[], message: Message, villagers: Villagers): Promise<Message>[] {
    if (tokens.length == TOKEN.all) {
      return [message.reply(villagers.villagersNames)];
    } else {
      return [message.reply(villagers.marriageVillagers)];
    }
  }
}