import { Message } from "discord.js";
import {
  getIconName as getIconFilename,
  getIconPath,
} from "../utils/get-icon-path";
import { fileExistsSync } from "../utils/file-exists";
import { Villager, Villagers } from "../villagers";
import { Handler } from "../types";
import { prettyPrint } from "../utils/pretty-print";

type VillagerKeys = keyof Villager;

const getVillagerProperty = (villager: Villager, choice: string) => {
  const propperties =  villager[<VillagerKeys>choice];
  if (typeof propperties == "string") {
    return [propperties];
  }
  return propperties;
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
  const keys = Object.keys(villager);

  return [
    message.reply(keys.reduce((prev, key) => {
      const items = getVillagerProperty(villager, key);
      console.log("key: ", key, " , item: ", items);
      if (Array.isArray(items) && items.length === 0) {
        return `${prev}${key}:\n`
      }
      return `${prev}* ${key}: ${prettyPrint(items)}\n`
    }, ""))
  ];
}

export class VillagerHandler implements Handler {

  public handle(tokens: string[], message: Message, villagers: Villagers): Promise<Message>[] {
    const villager = villagers.villagersList.find(
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