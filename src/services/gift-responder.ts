import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { getIconName as getIconFilename, getIconPath } from "../get-icon-path";
import { TYPES } from "../types";
import { fileExistsSync } from "../utils";
import { Villager, Villagers } from "../villagers";

type VillagerKeys = keyof Villager;

export const prepareMessage = (message: string): string[] => {
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

export type FileAttachment = {
  files: [
    {
      filepath: string;
      filename: string;
    }
  ];
};

const replyWithIcons = (
  iconNames: string[],
  message: Message
): Promise<Message>[] => {
  const reply: Promise<Message>[] = [];
  for (let iconName of iconNames) {
    const filename = getIconFilename(iconName);
    const filepath = getIconPath(iconName);

    if (fileExistsSync(filepath)) {
      reply.push(
        message.reply(iconName, {
          files: [
            {
              attachment: filepath,
              name: filename,
            },
          ],
        })
      );
    } else {
      reply.push(message.reply(iconName));
    }
  }
  return reply;
};

@injectable()
export class GiftResponder {
  private villagers: Villagers;
  constructor(@inject(TYPES.Villagers) villagers: Villagers) {
    this.villagers = villagers;
  }

  handle(message: Message): Promise<Message>[] {
    const tokens = prepareMessage(message.content);
    const villager = this.villagers.villagers.find(
      (_) => _.name.toLowerCase() === tokens[2].toLowerCase()
    );
    if (villager === undefined) {
      return [message.reply("Error, could not fullfil request")];
    }
    switch (tokens.length) {
      // Return villager information
      case COMMAND.gift_villager:
        message.reply(JSON.stringify(villager));

      // Return a list of what the villager loves | likes | neutral | dislikes | hates
      case COMMAND.gift_villager_likeness:
        let villagerPreferences = getProperty(villager, tokens[3]);
        if (!Array.isArray(villagerPreferences)) {
          villagerPreferences = [villagerPreferences];
        }
        return replyWithIcons(villagerPreferences, message);

      // Return whether the villager loves | likes | neutral | dislikes | hates a specific gift
      case COMMAND.gift_villager_likeness_item:
        const items = getProperty(villager, tokens[3]);
        if (typeof items === "string" || items == null) {
          return [message.reply(false)];
        }
        items
          .map((item) => item.toLowerCase())
          .includes(tokens[4].toLowerCase());
        return [message.reply(items)];

      default:
        return [message.reply("Command validation error. ☹️")];
    }
  }
}
