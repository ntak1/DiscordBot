import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import {
  getIconName as getIconFilename,
  getIconPath,
} from "../utils/get-icon-path";
import { fileExistsSync } from "../utils/file-exists";
import { Villager, Villagers } from "../villagers";
import { prepareMessage } from "../utils/message-parser";
import { TYPES } from "../di/types";

type VillagerKeys = keyof Villager;

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
    const villager = this.villagers.villagersList.find(
      (_) => _.name.toLowerCase() === tokens[2].toLowerCase()
    );
    if (villager === undefined) {
      return [message.reply("Error, could not fullfil request")];
    }
    switch (tokens.length) {
      // Return villager information
      case COMMAND.gift_villager:
        return giftVillagerCommand(message, villager);

      // Return a list of what the villager loves | likes | neutral | dislikes | hates
      case COMMAND.gift_villager_likeness:
        return giftVillagerLikenessCommand(villager, tokens, message);

      // Return whether the villager loves | likes | neutral | dislikes | hates a specific gift
      case COMMAND.gift_villager_likeness_item:
        return giftVillagerLikenessItemCommand(villager, tokens, message);

      default:
        return [message.reply("Command validation error. ☹️")];
    }
  }
}
function giftVillagerLikenessItemCommand(
  villager: Villager,
  tokens: string[],
  message: Message
) {
  const items = getProperty(villager, tokens[3]);
  let functionReturn: Promise<Message>[];
  if (typeof items === "string" || items == null) {
    functionReturn = [message.reply(false)];
  } else {
    items.map((item) => item.toLowerCase()).includes(tokens[4].toLowerCase());
    functionReturn = [message.reply(items)];
  }
  return functionReturn;
}

function giftVillagerLikenessCommand(
  villager: Villager,
  tokens: string[],
  message: Message
) {
  let villagerPreferences = getProperty(villager, tokens[3]);
  if (!Array.isArray(villagerPreferences)) {
    villagerPreferences = [villagerPreferences];
  }
  return replyWithIcons(villagerPreferences, message);
}

function giftVillagerCommand(
  message: Message,
  villager: Villager
): Promise<Message>[] {
  return [
    message.reply(
            `
            name: ${getProperty(villager, "name")}
            birthday: ${getProperty(villager, "birthday")}
            loves: ${getProperty(villager, "loves")}
            likes: ${getProperty(villager, "likes")}
            neutral: ${getProperty(villager, "neutral")}
            dislikes: ${getProperty(villager, "dislikes")}
            hates: ${getProperty(villager, "hates")}
            `
    ),
  ];
}
