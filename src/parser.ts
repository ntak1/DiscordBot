import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import { Villagers } from "./villagers";

export const parser = (message: string): string[] => {
  return message
    ?.toLowerCase()
    .split(" ")
    .filter((token) => token !== " ");
};

export interface GiftCommand {
  characterName: string;
  likenes: "likes" | "neutral" | "dislikes" | "hates";
}
@injectable()
export class GiftParser {
  private villagers: Villagers;
  constructor(@inject(TYPES.Villagers) villagers: Villagers) {
    this.villagers = villagers;
  }

  parse(tokens: string[]) {
    if (tokens.length == 3) {
      console.log("Entered here" + this.villagers.villagers[0]);
      return this.villagers.villagers.find(
        (_) => _.name.toLowerCase() === tokens[2].toLowerCase()
      );
    }
  }
}
