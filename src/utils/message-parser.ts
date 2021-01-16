import { inject, injectable } from "inversify";
import { TYPES } from "../di/types";
import { Villagers } from "../villagers";

export const prepareMessage = (message: string): string[] => {
  return message
    ?.toLowerCase()
    .split(" ")
    .filter((token) => token !== " ");
};

export const enum ValidationStatus {
  NOT_A_COMMAND,
  VALID_COMMAND,
}

@injectable()
export class MessageValidator {
  private villagers: Villagers;

  constructor(@inject(TYPES.Villagers) villagers: Villagers) {
    this.villagers = villagers;
  }

  isExistingVillager = (villagerName: string): Boolean => {
    const villagers = new Villagers();
    for (let villager of this.villagers.villagersList) {
      console.debug(villager.name);
      if (villagerName === villager.name.toLocaleLowerCase()) {
        return true;
      }
    }
    return false;
  };

  validateMessageTokens = (tokens: string[]): ValidationStatus => {
    if (tokens[0] !== "$$") {
      console.error("NOT_A_COMMAND");
      return ValidationStatus.NOT_A_COMMAND;
    }
    return ValidationStatus.VALID_COMMAND;
  };
}
