import { injectable } from "inversify";

interface Villager {
  name: string;
  birthday: string;
  loves: string[];
  likes: string[];
  neutral: string[];
  dislikes: string[];
  hates: string[];
}
interface villagersList {
  villagers: string[];
}

const BASE_DIR = "../data";

const shane: Villager = {
  name: "Shane",
  birthday: "Spring 20",
  loves: ["Beer", "Hot Pepper", "Pizza", "Pepper Poppers"],
  likes: ["All eggs", "Fruit"],
  neutral: ["All milt"],
  dislikes: [
    "All mushrooms",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Seaweed",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: ["Pickles", "Quartz"],
};

@injectable()
export class Villagers {
  private villagersFile: string = `${BASE_DIR}/villagers.json`;
  public villagers: Villager[] = [];

  constructor() {
    // let json = require(this.villagersFile);
    // const villagersList: villagersList = JSON.parse(json);
    // for (let villager in villagersList.villagers) {
    //   let villagerFile = `${BASE_DIR}/${villager}.json`;
    //   json = require(villagerFile);
    //   this.villagers.concat(JSON.parse(json));
    // }
    this.villagers = this.villagers.concat(shane);
  }
}
