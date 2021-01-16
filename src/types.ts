import { Message } from "discord.js";
import { Villagers } from "./villagers";

export interface Handler {
  handle: (tokens: string[], message: Message, villagers: Villagers) => Promise<Message>[]
}