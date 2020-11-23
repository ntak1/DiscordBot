import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import { Villager, Villagers } from "./villagers";

type VillagerKeys = keyof Villager;

export const parser = (message: string): string[] => {
  return message
    ?.toLowerCase()
    .split(" ")
    .filter((token) => token !== " ");
};

const getProperty = (villager: Villager, choice: string) => {
  return villager[<VillagerKeys>choice];
};

const COMMAND = {
  gift_villager: 3,
  gift_villager_likeness: 4,
  gift_villager_likeness_item: 5,
};

@injectable()
export class GiftParser {
  private villagers: Villagers;
  constructor(@inject(TYPES.Villagers) villagers: Villagers) {
    this.villagers = villagers;
  }

  parse(tokens: string[]) {
    const villager = this.villagers.villagers.find(
      (_) => _.name.toLowerCase() === tokens[2].toLowerCase()
    );
    if (villager === undefined) {
      return null;
    }
    switch (tokens.length) {
      case COMMAND.gift_villager:
        return villager;
      case COMMAND.gift_villager_likeness:
        return getProperty(villager, tokens[3]);
      case COMMAND.gift_villager_likeness_item:
        const items = getProperty(villager, tokens[3]);
        if (typeof items === "string" || items == null) {
          return false;
        }
        return items
          .map((item) => item.toLowerCase())
          .includes(tokens[4].toLowerCase());
    }
  }
}
