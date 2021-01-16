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

const getVillagerProperty = (villager: Villager, choice: string) => {
  return villager[<VillagerKeys>choice];
};

const COMMAND = {
  villager: 2,               // $$ <villager>
  villager_likeness: 3,      // $$ <villager> <likeness>
  villager_likeness_item: 4, // $$ <villager> <likeness> <gift>
};

const TOKEN = {
  villagerName: 1,
  likeness: 2,
  item: 3,
}

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
    let tokens = prepareMessage(message.content);
    const villager = this.villagers.villagersList.find(
      (_) => _.name.toLowerCase() === tokens[TOKEN.villagerName]
    );
    if (villager === undefined) {
      return [message.reply("Error, could not fullfil request")];
    }
    if (tokens.length > 4) { // the last tokens are items;
      const lastItems = tokens.slice(TOKEN.item, tokens.length).reduce((prev, item) => `${prev} ${item}`);
      tokens = [...tokens.slice(0, TOKEN.likeness + 1), lastItems];
    }
    console.log("processed tokens: ", tokens);
    switch (tokens.length) {
      // Return villager information
      case COMMAND.villager:
        console.debug("Command villager");
        return villagerCommand(villager, message);

      // Return a list of what the villager loves | likes | neutral | dislikes | hates
      case COMMAND.villager_likeness:
        console.debug("Command villager likeness");
        return villagerLikenessCommand(villager, tokens, message);

      // Return whether the villager loves | likes | neutral | dislikes | hates a specific gift
      case COMMAND.villager_likeness_item:
        console.debug("Command villager likeness item");
        return villagerLikenessItemCommand(villager, tokens, message);

      default:
        return [message.reply("Command validation error. ☹️")];
    }
  }
}

function villagerLikenessItemCommand(
  villager: Villager,
  tokens: string[],
  message: Message
) {
  let items = getVillagerProperty(villager, tokens[TOKEN.likeness]);
  let functionReturn: Promise<Message>[];
  if (items == null) {
    functionReturn = [message.reply(false)];
  } else {
    if (typeof items === "string") {
      items = [items];
    }
    items = items.map((item) => item.toLocaleLowerCase());
    let itemCompatible = false;
    for (let item of items) {
      if (item === tokens[TOKEN.item]) {
        itemCompatible = true;
        break;
      }
    }
    functionReturn = [message.reply(itemCompatible)];
  }
  return functionReturn;
}

function villagerLikenessCommand(
  villager: Villager,
  tokens: string[],
  message: Message
) {
  let villagerPreferences = getVillagerProperty(villager, tokens[TOKEN.likeness]);
  if (!Array.isArray(villagerPreferences)) {
    villagerPreferences = [villagerPreferences];
  }
  return replyWithIcons(villagerPreferences, message);
}

function villagerCommand(
  villager: Villager,
  message: Message,
): Promise<Message>[] {
  return [
    message.reply(
          `name: ${getVillagerProperty(villager, "name")}\n`
          +`birthday: ${getVillagerProperty(villager, "birthday")}\n`
          + `loves: ${getVillagerProperty(villager, "loves")}\n`
          + `likes: ${getVillagerProperty(villager, "likes")}\n`
          + `neutral: ${getVillagerProperty(villager, "neutral")}\n`
          + `dislikes: ${getVillagerProperty(villager, "dislikes")}\n`
          + `hates: ${getVillagerProperty(villager, "hates")}\n`
    ),
  ];
}
