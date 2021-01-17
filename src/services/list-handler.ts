import { Message } from "discord.js";
import { Villagers } from "../villagers";
import { Handler } from "../types";
import { prettyPrint } from "../utils/pretty-print";

const TOKEN = {
  all: 3,
  marriage: 4,
}

export class ListHandler implements Handler {
  public handle(tokens: string[], message: Message, villagers: Villagers): Promise<Message>[] {
    if (tokens.length == TOKEN.all) {
      return [message.reply(prettyPrint(villagers.villagersNames))];
    } else {
      return [message.reply(prettyPrint(villagers.marriageVillagers))];
    }
  }
}