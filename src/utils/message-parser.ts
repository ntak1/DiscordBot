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
  INVALID_COMMAND,
  INVALID_VILLAGER,
  INVALID_VERB,
  INVALID_GIFT,
  INVALID_CHAR_ERROR,
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
    // TODO: if we have other features, change create another error type
    if (tokens[1] !== "gift") {
      console.error("INVALID_COMMAND");
      return ValidationStatus.INVALID_COMMAND;
    }
    if (!this.isExistingVillager(tokens[2])) {
      console.error("INVALID_VILLAGERS");
      return ValidationStatus.INVALID_VILLAGER;
    }
    if (tokens.length === 4 && !tokens[3].match("[a-z0-9]")) {
      console.log("INVALID_CHAR_ERROR");
      return ValidationStatus.INVALID_CHAR_ERROR;
    }
    if (tokens.length === 5 && !tokens[4].match("[a-z0-9]")) {
      console.log("INVALID_CHAR_ERROR");
      return ValidationStatus.INVALID_CHAR_ERROR;
    }
    return ValidationStatus.VALID_COMMAND;
  };
}
