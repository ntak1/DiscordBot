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

const alex: Villager = {
  name: "Alex",
  birthday: "Summer 13",
  loves: ["Complete Breakfast", "Salmon Dinner"],
  likes: ["All Eggs (except Void Egg)"],
  neutral: [
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Milk",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["Salmonberry", "Wild Horseradish"],
  hates: ["Holly", "Quartz"],
};

const elliott: Villager = {
  name: "Elliott",
  birthday: "Fall 05",
  loves: [
    "Crab Cakes",
    "Duck Feather",
    "Lobster",
    "Pomegranate",
    "Tom Kha Soup",
  ],
  likes: ["All Fruit (except Pomegranate & Salmonberry)", "Octopus", "Squid"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fish (except Carp, Lobster, Octopus, Sea Cucumber, Snails & Squid)",
  ],
  dislikes: [
    "All Milk",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Pizza",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: ["Amaranth", "Quartz", "Salmonberry", "Sea Cucumber"],
};

const harvey: Villager = {
  name: "Harvey",
  birthday: "Winter 14",
  loves: ["Coffee", "Pickles", "Super Meal", "Truffle Oil", "Wine"],
  likes: [
    "All Fruit (except Salmonberry & Spice Berry)",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Duck Egg",
    "Duck Feather",
    "Goat Milk",
    "Hazelnut",
    "Holly",
    "Large Goat Milk",
    "Leek",
    "Quartz",
    "Snow Yam",
    "Spring Onion",
    "Wild Horseradish",
    "Winter Root",
  ],
  neutral: ["All Eggs (except Duck Egg & Void Egg)", "Large Milk", "Milk"],
  dislikes: [
    "Blueberry Tart",
    "Bread",
    "Cheese",
    "Chocolate Cake",
    "Cookie",
    "Cranberry Sauc",
    "Fried Mushroom",
    "Glazed Yams",
    "Goat Cheese",
    "Hashbrowns",
    "Ice Cream",
    "Pancakes",
    "Pink Cake",
    "Pizza",
    "Rhubarb Pie",
    "Rice Pudding",
  ],
  hates: [
    "Coral",
    "Nautilus Shell",
    "Rainbow Shell",
    "Salmonberry",
    "Spice Berry",
  ],
};

const sam: Villager = {
  name: "Sam",
  birthday: "Summer 17",
  loves: ["Cactus Fruit", "Maple Bar", "Pizza", "Tigerseye"],
  likes: ["All Eggs (except Void Egg)", "Joja Cola"],
  neutral: [
    "All Fruit (except Cactus Fruit, Fruit Tree Fruit & Salmonberry)",
    "All Milk",
  ],
  dislikes: [
    "All Mushrooms (except Red)",
    "All Vegetables (except Hops, Tea Leaves, & Wheat)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Quartz",
    "Salmonberry",
    "Seaweed",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: [
    "Coal",
    "Copper Bar",
    "Duck Mayonnaise",
    "Gold Bar",
    "Gold Ore",
    "Iridium Bar",
    "Iridium Ore",
    "Iron Bar",
    "Mayonnaise",
    "Pickles",
    "Refined Quartz",
  ],
};

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

const sebastian: Villager = {
  name: "Sebastian",
  birthday: "Winter 10",
  loves: ["Frozen Tear", "Obsidian", "Pumpkin Soup", "Sashimi", "Void Egg"],
  likes: ["Flounder", "Quartz"],
  neutral: [
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Fish (except Carp, Flounder, & Snails)",
    "All Milk",
  ],
  dislikes: [
    "All Flowers (except Poppy)",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Salmonberry",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: [
    "All Artisan Goods (except Coffee, Green Tea, & Oil)",
    "All Eggs (except Void Egg)",
    "Clay",
    "Complete Breakfast",
    "Farmer's Lunch",
    "Omelet",
  ],
};

const abigail: Villager = {
  name: "Abigail",
  birthday: "Fall 13",
  loves: [
    "Amethyst",
    "Blackberry Cobbler",
    "Chocolate Cake",
    "Pufferfish",
    "Pumpkin",
    "Spicy Eel",
  ],
  likes: [" Quartz"],
  neutral: [
    "All Milk",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: [
    "All Eggs",
    "All Fruit (except Fruit Tree Fruit)",
    "All Vegetables (except Hops, Pumpkin, Tea Leaves, & Wheat)",
    "Sugar",
    "Wild Horseradish",
  ],
  hates: ["Clay", "Holly"],
};

const emily: Villager = {
  name: "Emily",
  birthday: "Spring 27",
  loves: [
    "Amethyst",
    "Aquamarine",
    "Cloth",
    "Emerald",
    "Jade",
    "Ruby",
    "Survival Burger",
    "Topaz",
    "Wool",
  ],
  likes: ["Daffodil", "Quartz"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Milk",
    "All Mushrooms (except Red)",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  dislikes: [
    "Fried Eel",
    "Ice Cream",
    "Rice Pudding",
    "Salmonberry",
    "Spicy Eel",
  ],
  hates: ["Fish Taco", "Holly", "Maki Roll", "Salmon Dinner", "Sashimi"],
};

const haley: Villager = {
  name: "Haley",
  birthday: "Spring 14",
  loves: ["Coconut", "Fruit Salad", "Pink Cake", "Sunflower"],
  likes: ["Daffodil"],
  neutral: [],
  dislikes: [
    "All Eggs",
    "All Fruit (except Coconut)",
    "All Milk",
    "All Mushrooms (except Red)",
    "All Vegetables (except Hops, Tea Leaves, & Wheat)",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Quartz",
    "Snow Yam",
    "Winter Root",
  ],
  hates: ["All Fish", "Clay", "Prismatic Shard", "Wild Horseradish"],
};

const leah: Villager = {
  name: "Leah",
  birthday: "Winter 23",
  loves: [
    "Goat Cheese",
    "Poppyseed Muffin",
    "Salad",
    "Stir Fry",
    "Truffle",
    "Vegetable Medley",
    "Wine",
  ],
  likes: [
    "All Eggs (except Void Egg)",
    "All Fruit",
    "All Milk",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Driftwood",
    "Hazelnut",
    "Holly",
    "Leek",
    "Snow Yam",
    "Spring Onion",
    "Wild Horseradish",
    "Winter Root",
  ],
  neutral: [],
  dislikes: [
    "All Foraged Minerals (except Earth Crystal)",
    "All Gems (except Diamond & Prismatic Shard)",
    "Carp Surprise",
    "Cookie",
    "Fried Egg",
    "Ice Cream",
    "Pink Cake",
    "Rice Pudding",
    "Seaweed",
    "Survival Burger",
    "Tortilla",
  ],
  hates: ["Bread", "Hashbrowns", "Pancakes", "Pizza", "Void Egg"],
};

const maru: Villager = {
  name: "Maru",
  birthday: "Summer 10",
  loves: [
    "Battery Pack",
    "Cauliflower",
    "Cheese Cauliflower",
    "Diamond",
    "Gold Bar",
    "Iridium Bar",
    "Miner's Treat",
    "Pepper Poppers",
    "Rhubarb Pie",
    "Strawberry",
  ],
  likes: ["Copper Bar", "Iron Bar", "Oak Resin", "Pine Tar", "Quartz"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Blackberry, Crystal Fruit, Fruit Tree Fruit, Salmonberry & Strawberry)",
    "All Milk",
    "All Mushrooms (except Common & Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Wild Horseradish",
    "Winter Root",
  ],
  dislikes: [
    "Blackberry",
    "Common Mushroom",
    "Crystal Fruit",
    "Maple Syrup",
    "Salmonberry",
  ],
  hates: ["Holly", "Honey", "Pickles", "Snow Yam", "Truffle"],
};

const penny: Villager = {
  name: "Penny",
  birthday: "Fall 02",
  loves: [
    "Diamond",
    "Emerald",
    "Melon",
    "Poppy",
    "Poppyseed Muffin",
    "Red Plate",
    "Roots Platter",
    "Sandfish",
    "Tom Kha Soup",
  ],
  likes: ["All Milk", "Dandelion", "Leek"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Fruit Tree Fruit, Grape, Melon & Salmonberry)",
    "All Mushrooms (except Red & Purple)",
    "Daffodil",
    "Hazelnut",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  dislikes: [
    "Algae Soup",
    "Duck Feather",
    "Pale Broth",
    "Purple Mushroom",
    "Quartz",
    "Red Mushroom",
    "Salmonberry",
    "Wool",
  ],
  hates: [
    "Beer",
    "Grape",
    "Holly",
    "Hops",
    "Mead",
    "Pale Ale",
    "Rabbit's Foot",
    "Wine",
  ],
};

const caroline: Villager = {
  name: "Caroline",
  birthday: "Winter 07",
  loves: ["Fish Taco", "Green Tea", "Summer Spangle"],
  likes: ["Daffodil", "Tea Leaves"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Milk",
  ],
  dislikes: [
    "All Mushrooms (except Red)",
    "Amaranth",
    "Dandelion",
    "Duck Mayonnaise",
    "Hazelnut",
    "Holly",
    "Leek",
    "Mayonnaise",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: ["Quartz", "Salmonberry"],
};

const clint: Villager = {
  name: "Clint",
  birthday: "Winter 26",
  loves: [
    "Amethyst",
    "Aquamarine",
    "Artichoke Dip",
    "Emerald",
    "Fiddlehead Risotto",
    "Gold Bar",
    "Iridium Bar",
    "Jade",
    "Omni Geode",
    "Ruby",
    "Topaz",
  ],
  likes: ["Copper Bar", "Iron Bar "],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Milk",
    "All Mushrooms (except Red)",
    "Coal",
    "Daffodil",
    "Dandelion",
    "Gold Ore",
    "Hazelnut",
    "Iridium Ore",
    "Leek",
    "Refined Quartz",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: [
    "All Flowers (except Poppy)",
    "Quartz",
    "Salmonberry",
    "Wild Horseradish",
  ],
  hates: ["Holly"],
};

const demetrius: Villager = {
  name: "Demetrius",
  birthday: "Summer 19",
  loves: ["Bean Hotpot", "Ice Cream", "Rice Pudding", "Strawberry"],
  likes: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Strawberry)",
    "Purple Mushroom",
  ],
  neutral: [
    "All Fish (except Carp & Snail)",
    "All Milk",
    "All Mushrooms (except Red & Purple)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  dislikes: ["Quartz"],
  hates: ["Holly"],
};

const dwarf: Villager = {
  name: "Dwarf",
  birthday: "Summer 22",
  loves: [
    "Amethyst",
    "Aquamarine",
    "Emerald",
    "Jade",
    "Lemon Stone",
    "Omni Geode",
    "Ruby",
    "Topaz",
  ],
  likes: [
    "Cave Carrot",
    "Dwarf Gadget",
    "Dwarf Scroll I",
    "Dwarf Scroll II",
    "Dwarf Scroll III",
    "Dwarf Scroll IV",
    "Dwarvish Helm",
    "Quartz",
  ],
  neutral: [
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "Solar Essence",
    "Void Essence",
  ],
  dislikes: [
    "All Eggs",
    "All Milk",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Salmonberry",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: [],
};

const evelyn: Villager = {
  name: "Evelyn",
  birthday: "Winter 20",
  loves: [
    "Beet",
    "Chocolate Cake",
    "Diamond",
    "Fairy Rose",
    "Stuffing",
    "Tulip",
  ],
  likes: ["All Milk", "Daffodil"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Fruit Tree Fruit, Salmonberry & Spice Berry)",
    "All Mushrooms (except Red)",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["Quartz", "Wild Horseradish"],
  hates: [
    "All Fish",
    "Clam",
    "Clay",
    "Coral",
    "Fried Eel",
    "Garlic",
    "Holly",
    "Maki Roll",
    "Salmonberry",
    "Sashimi",
    "Spice Berry",
    "Spicy Eel",
    "Trout Soup",
  ],
};

const george: Villager = {
  name: "George",
  birthday: "Fall 24",
  loves: ["Fried Mushroom", "Leek"],
  likes: ["Daffodil"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Milk",
    "All Mushrooms (except Red)",
    "Hazelnut",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["All Flowers (except Poppy)", "Salmonberry", "Wild Horseradish"],
  hates: ["Clay", "Dandelion", "Holly", "Quartz"],
};

const gus: Villager = {
  name: "Gus",
  birthday: "Summer 08",
  loves: ["Diamond", "Escargot", "Fish Taco", "Orange"],
  likes: ["Daffodil"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Milk",
    "All Mushrooms (except Red)",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["Salmonberry", "Wild Horseradish"],
  hates: ["Coleslaw", "Holly", "Quartz"],
};

const jas: Villager = {
  name: "Jas",
  birthday: "Summer 04",
  loves: ["Fairy Rose", "Pink Cake", "Plum Pudding"],
  likes: ["Coconut", "Daffodil"],
  neutral: ["All Milk"],
  dislikes: [
    "All Eggs",
    "All Fruit (except Coconut & Fruit Tree Fruit)",
    "All Mushrooms (except Red)",
    "All Vegetables (except Hops, Tea Leaves, & Wheat)",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Quartz",
    "Snow Yam",
    "Winter Root",
  ],
  hates: [
    "All Artisan Goods (except Honey, Jelly, & Oil)",
    "Clay",
    "Triple Shot Espresso",
    "Wild Horseradish",
  ],
};

const jodi: Villager = {
  name: "Jodi",
  birthday: "Fall 11",
  loves: [
    "Chocolate Cake",
    "Crispy Bass",
    "Diamond",
    "Eggplant Parmesan",
    "Fried Eel",
    "Pancakes",
    "Rhubarb Pie",
    "Vegetable Medley",
  ],
  likes: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Spice Berry)",
    "All Milk",
  ],
  neutral: [],
  dislikes: [
    "All Mushrooms (except Red)",
    "Garlic",
    "Hazelnut",
    "Holly",
    "Leek",
    "Quartz",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: ["Daffodil", "Dandelion", "Spice Berry"],
};

const kent: Villager = {
  name: "Kent",
  birthday: "Spring 04",
  loves: ["Fiddlehead Risotto", "Roasted Hazelnuts"],
  likes: ["All Eggs (except Void Egg)", "All Fruit", "Daffodil"],
  neutral: [
    "All Mushrooms (except Red)",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Horseradish",
    "Winter Root",
  ],
  dislikes: ["Quartz", "Snow Yam"],
  hates: ["All Milk", "Algae Soup", "Holly", "Sashimi", "Tortilla"],
};

const krobus: Villager = {
  name: "Krobus",
  birthday: "Winter 01",
  loves: [
    "Diamond",
    "Iridium Bar",
    "Pumpkin",
    "Void Egg",
    "Void Mayonnaise",
    "Wild Horseradish",
  ],
  likes: ["Gold Bar", "Quartz", "Seafoam Pudding"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Milk",
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
  ],
  dislikes: [
    "All Cooking (except Bread, Fried Egg, Seafoam Pudding & Strange Bun)",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Life Elixir",
    "Salmonberry",
    "Snow Yam",
    "Winter Root",
  ],
  hates: [],
};

const lewis: Villager = {
  name: "Lewis",
  birthday: "Spring 07",
  loves: [
    "Autumn's Bounty",
    "Glazed Yams",
    "Green Tea",
    "Hot Pepper",
    "Vegetable Medley",
  ],
  likes: ["Blueberry", "Cactus Fruit", "Coconut"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Fruit (except Blueberry, Cactus Fruit, Coconut, Fruit Tree Fruit, Hot Pepper, & Salmonberry)",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["All Milk", "Salmonberry", "Wild Horseradish"],
  hates: ["Holly", "Quartz"],
};

const linus: Villager = {
  name: "Linus",
  birthday: "Winter 03",
  loves: [
    "Blueberry Tart",
    "Cactus Fruit",
    "Coconut",
    "Dish o' The Sea",
    "Yam",
  ],
  likes: [
    "All Eggs (except Void Egg)",
    "All Milk",
    "All Fruit (except Cactus Fruit & Coconut)",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Snow Yam",
    "Spring Onion",
    "Wild Horseradish",
    "Winter Root",
  ],
  neutral: ["All Fish (except Carp & Snail)"],
  dislikes: [
    "All Foraged Minerals",
    "All Gems (except Diamond & Prismatic Shard)",
  ],
  hates: [],
};

const marnie: Villager = {
  name: "Marnie",
  birthday: "Fall 18",
  loves: [
    "Diamond",
    "Farmer's Lunch",
    "Pink Cake",
    "Pumpkin Pie",
  ],
  likes: ["All Eggs (except Void Egg)", "All Milk", "Quartz"],
  neutral: [
    "All Fruit (except Fruit Tree Fruit & Salmonberry)",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["Salmonberry", "Seaweed", "Wild Horseradish"],
  hates: ["Clay", "Holly"],
};

const pam: Villager = {
  name: "Pam",
  birthday: "Spring 18",
  loves: [
    "Beer",
    "Cactus Fruit",
    "Glazed Yams",
    "Mead",
    "Pale Ale",
    "Parsnip",
    "Parsnip Soup",
  ],
  likes: [
    "All Fruit (except Cactus Fruit)",
    "All Milk",
    "Daffodil",
  ],
  neutral: [
    "All Fish (except Carp, Octopus, Snail & Squid)",
    "All Mushrooms (except Red)",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["All Eggs", "Quartz", "Wild Horseradish"],
  hates: ["Holly", "Octopus", "Squid"],
};

const pierre: Villager = {
  name: "Pierre",
  birthday: "Spring 26",
  loves: [" Fried Calamari"],
  likes: ["All Eggs (except Void Egg)", "All Milk", "Daffodil", "Dandelion"],
  neutral: ["All Fruit (except Fruit Tree Fruit & Salmonberry)"],
  dislikes: [
    "All Foraged Minerals",
    "All Gems (except Diamond & Prismatic Shard)",
    "All Mushrooms (except Red)",
    "Hazelnut",
    "Holly",
    "Leek",
    "Salmonberry",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: ["All Fish", "Corn", "Garlic", "Parsnip Soup", "Tortilla"],
};

const robin: Villager = {
  name: "Robin",
  birthday: "Fall 21",
  loves: ["Goat Cheese", "Peach", "Spaghetti"],
  likes: ["All Milk", "All Fruit (except Peach)", "Hardwood", "Quartz"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Mushrooms (except Red)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Leek",
    "Snow Yam",
    "Winter Root",
  ],
  dislikes: ["Wild Horseradish"],
  hates: [" Holly"],
};

const sandy: Villager = {
  name: "Sandy",
  birthday: "Fall 15",
  loves: ["Crocus", "Daffodil", "Sweet Pea"],
  likes: ["All Fruit", "Goat Milk", "Large Goat Milk", "Quartz", "Wool"],
  neutral: [
    "All Eggs (except Void Egg)",
    "All Mushrooms (except Red)",
    "Dandelion",
    "Hazelnut",
    "Large Milk",
    "Leek",
    "Milk",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  dislikes: [],
  hates: [" Holly"],
};

const vincenct: Villager = {
  name: "Vincent",
  birthday: "Spring 10",
  loves: ["Cranberry Candy", "Grape", "Pink Cake", "Snail"],
  likes: ["Coconut", "Daffodil"],
  neutral: [],
  dislikes: [
    "All Eggs",
    "All Fruit (except Coconut, Grape & Fruit Tree Fruit)",
    "All Vegetables (except Hops, Tea Leaves, & Wheat)",
    "All Mushrooms (except Red)",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Quartz",
    "Snow Yam",
    "Winter Root",
  ],
  hates: [
    "All Artisan Goods (except Honey, Jelly, & Oil)",
    "Clay",
    "Triple Shot Espresso",
    "Wild Horseradish",
  ],
};

const willy: Villager = {
  name: "Willy",
  birthday: "Summer 24",
  loves: [
    "Catfish",
    "Diamond",
    "Iridium Bar",
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
    "Dish o' The Sea",
    "Maki Roll",
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

const wizard: Villager = {
  name: "Wizard",
  birthday: "Winter 17",
  loves: [
    "Purple Mushroom",
    "Solar Essence",
    "Super Cucumber",
    "Void Essence",
  ],
  likes: ["All Geode Minerals", "Quartz"],
  neutral: ["All Fruit (except Fruit Tree Fruit & Salmonberry)"],
  dislikes: [
    "All Eggs",
    "All Milk",
    "All Mushrooms (except Red & Purple)",
    "Daffodil",
    "Dandelion",
    "Hazelnut",
    "Holly",
    "Leek",
    "Salmonberry",
    "Slime",
    "Snow Yam",
    "Wild Horseradish",
    "Winter Root",
  ],
  hates: [],
};

@injectable()
export class Villagers {
  public villagers: Villager[] = [];
  public numberVillagers: number = 0;

  constructor() {
    this.villagers.push(alex);
    this.villagers.push(elliott);
    this.villagers.push(harvey);
    this.villagers.push(sam);
    this.villagers.push(sebastian);
    this.villagers.push(shane);
    this.villagers.push(abigail);
    this.villagers.push(emily);
    this.villagers.push(haley);
    this.villagers.push(leah);
    this.villagers.push(maru);
    this.villagers.push(penny);
    this.villagers.push(caroline);
    this.villagers.push(clint);
    this.villagers.push(demetrius);
    this.villagers.push(dwarf);
    this.villagers.push(evelyn);
    this.villagers.push(george);
    this.villagers.push(gus);
    this.villagers.push(jas);
    this.villagers.push(jodi);
    this.villagers.push(kent);
    this.villagers.push(krobus);
    this.villagers.push(lewis);
    this.villagers.push(linus);
    this.villagers.push(marnie);
    this.villagers.push(pam);
    this.villagers.push(pierre);
    this.villagers.push(robin);
    this.villagers.push(sandy);
    this.villagers.push(vincenct);
    this.villagers.push(wizard);
    this.villagers.push(willy);
    this.numberVillagers = this.villagers.length;
  }
}
