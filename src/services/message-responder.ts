import { FileOptions, Message, MessageAttachment, MessageEmbed } from "discord.js";
import { PingFinder } from "./ping-finder";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { GiftParser, parser } from "../parser";

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
    message.channel.send({
      files: [
        {
          attachment: 'data/Beer.png',
          name: "Beer.png"
        }
      ]
    })
      .then(() => console.log("Sucess sending image"))
      .catch((e) => console.log("Error sending image", e));
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
