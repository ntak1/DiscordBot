import { Message } from "discord.js";
import { PingFinder } from "./ping-finder";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { GiftParser, parser } from "../parser";
import { Villager, Villagers } from "../villagers";

@injectable()
export class MessageResponder {
  private pingFinder: PingFinder;
  private giftParser: GiftParser;

  constructor(
    @inject(TYPES.PingFinder) pingFinder: PingFinder,
    @inject(TYPES.GiftParser) giftParser: GiftParser
  ) {
    this.pingFinder = pingFinder;
    this.giftParser = giftParser;
  }

  handle(message: Message): Promise<Message | Message[]> {
    const messageContent = parser(message.content);
    if (messageContent.length && messageContent[0] == "$$") {
      const reply = this.giftParser.parse(messageContent);
      if (reply != null) {
        message.reply(JSON.stringify(reply));
      } else {
        message.reply("Error trying to parse: " + messageContent.toString());
      }
    }
    if (this.pingFinder.isPing(message.content)) {
      return message.reply("pong!");
    }

    return Promise.reject();
  }
}
