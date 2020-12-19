import { Client, Message } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "./di/types";
import { GiftResponder } from "./services/gift-responder";
import {
  MessageValidator,
  prepareMessage,
  ValidationStatus,
} from "./utils/message-parser";

@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: GiftResponder;
  private messageValidator: MessageValidator;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.GiftResponder) messageResponder: GiftResponder,
    @inject(TYPES.MessageValidator) messageValidator: MessageValidator
  ) {
    this.client = client;
    this.token = token;
    this.messageResponder = messageResponder;
    this.messageValidator = messageValidator;
  }

  public listen(): Promise<string> {
    this.client.on("message", (message: Message) => {
      if (message.author.bot) {
        console.info("Ignoring bot message!");
        return;
      }

      console.info("Message received! Contents: ", message.content);
      const validationStatus = this.messageValidator.validateMessageTokens(
        prepareMessage(message.content)
      );
      if (validationStatus !== ValidationStatus.VALID_COMMAND) {
        return;
      }

      this.messageResponder.handle(message).forEach((promise) => {
        promise
          .then(() => {
            console.info("Message sent");
          })
          .catch((err) => {
            console.error("Error in GiftResponder, message not sent", err);
          });
      });
    });

    return this.client.login(this.token);
  }
}
