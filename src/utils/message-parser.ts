import { inject } from "inversify";
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
  INVALID_VILLAGER,
  INVALID_VERB,
  INVALID_GIFT,
  INVALID_CHAR_ERROR,
  VALID_COMMAND,
}

export class MessageValidator {
  private villagers: Villagers;

  constructor(
    @inject(TYPES.Villagers) villagers: Villagers,
  ) {
    this.villagers = villagers;
  }

  isExistingVillager = (villagerName: string): Boolean => {
    const villagers = new Villagers();
    for (let villager of this.villagers.villagersList) {
      if (villagerName === villager.name) {
        return true;
      }
    }
    return false;
  };

  validateMessageTokens = (tokens: string[]): ValidationStatus => {
    if (tokens[0] !== "$$") {
      return ValidationStatus.NOT_A_COMMAND;
    }
    // TODO: if we have other features, change create another error type
    if (tokens[1] !== "gift") {
      return ValidationStatus.NOT_A_COMMAND;
    }
    if (!this.isExistingVillager(tokens[2])) {
      return ValidationStatus.INVALID_VILLAGER;
    }
    if (tokens.length === 4 && !tokens[3].match("[a-z0-9]")) {
      return ValidationStatus.INVALID_CHAR_ERROR;
    }
    if (tokens.length === 5 && !tokens[4].match("[a-z0-9]")) {
      return ValidationStatus.INVALID_CHAR_ERROR;
    }
    return ValidationStatus.VALID_COMMAND;
  };
}
