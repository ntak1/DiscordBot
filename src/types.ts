import { Message } from "discord.js";
import { Villagers } from "./data/villagers";

export interface Handler {
  handle: (tokens: string[], message: Message, villagers: Villagers) => Promise<Message>[]
}