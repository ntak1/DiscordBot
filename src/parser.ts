import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import { Villager, Villagers } from "./villagers";

export const parser = (message: string): string[] => {
  return message
    ?.toLowerCase()
    .split(" ")
    .filter((token) => token !== " ");
};

const getGifts = (villager: Villager | undefined, choice: string) => {
  switch (choice) {
    case "loves":
      return villager?.loves;
    case "likes":
      return villager?.likes;
    case "dislikes":
      return villager?.dislikes;
    case "hates":
      return villager?.hates;
  }
};

@injectable()
export class GiftParser {
  private villagers: Villagers;
  constructor(@inject(TYPES.Villagers) villagers: Villagers) {
    this.villagers = villagers;
  }

  parse(tokens: string[]) {
    switch (tokens.length) {
      case 3:
        return this.villagers.villagers.find(
          (_) => _.name.toLowerCase() === tokens[2].toLowerCase()
        );
      case 4:
        const villager = this.villagers.villagers.find(
          (_) => _.name.toLowerCase() === tokens[2].toLowerCase()
        );
        return getGifts(villager, tokens[3]);
    }
  }
}
