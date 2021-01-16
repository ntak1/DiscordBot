import { Message } from "discord.js";
import { inject, injectable } from "inversify";

import { Villagers } from "../villagers";
import { prepareMessage } from "../utils/message-parser";
import { TYPES } from "../di/types";
import { ListHandler } from "./list-handler";
import { VillagerHandler } from "./villager-handler";

@injectable()
export class Responder {
  private villagers: Villagers;
  constructor(@inject(TYPES.Villagers) villagers: Villagers) {
    this.villagers = villagers;
  }

  handle(message: Message): Promise<Message>[] {
    let tokens = prepareMessage(message.content);
    if (tokens[1] == "list") {
      const handler =  new ListHandler();
      return handler.handle(tokens, message, this.villagers);
    } else if (tokens[1] == "wiki") {
      return [message.reply("https://pt.stardewcommunitywiki.com/Stardew_Valley_Wiki")]
    } else {
      const handler = new VillagerHandler();
      return handler.handle(tokens, message, this.villagers);
    }
  }
}

