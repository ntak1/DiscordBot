import { injectable } from "inversify";

export interface Villager {
  name: string;
  birthday: string;
  loves: string[];
  likes: string[];
  neutral: string[];
  dislikes: string[];
  hates: string[];
}

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

const willy: Villager = {
  name: "Willy",
  birthday: "Summer 24",
  loves: [
    "Catfish",
    "Diamond",
    "Bar.png Iridium Bar",
    "Mead",
    "Octopus",
    "Pumpkin",
    "Sea Cucumber",
    "Sturgeon",
  ],
  likes: ["Gold Bar", "Lingcod", "Quartz", "Pudding", "Trout "],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fish (except Carp, Catfish, Lingcod, Octopus, Sea Cucumber, Snail, Sturgeon & Tiger Trout)",
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Milk",
    "Dish o' The Sea.png Dish o' The Sea",
    "Roll.png Maki Roll",
    "Sashimi",
  ],
  dislikes: [
    "All Cooking except for Bread, Fried Egg, Strange Bun; the fish dishes he is neutral towards: Dish o' The Sea, Maki Roll, & Sashimi; and the fish dishes he likes: Baked Fish, Carp Surprise, Chowder, Crab Cakes, Crispy Bass, Fish Stew, Fish Taco, Fried Calamari, Fried Eel, Lobster Bisque, Salmon Dinner, Seafoam Pudding, & Trout Soup",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Life Elixir",
    "Salmonberry",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: [],
};

@injectable()
export class Villagers {
  public villagers: Villager[] = [];
  public numberVilagers: number = 0;

  constructor() {
    this.villagers.push(shane);
    this.villagers.push(willy);
    this.numberVilagers = this.villagers.length;
  }
}
