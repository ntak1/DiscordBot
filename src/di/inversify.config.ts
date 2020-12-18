import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { Bot } from "../bot";
import { Client } from "discord.js";
import { Villagers } from "../villagers";
import { GiftResponder } from "../services/gift-responder";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
const fakeToken = "fake token";
if (process.env.TOKEN !== undefined) {
  container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
} else {
  container.bind<string>(TYPES.Token).toConstantValue(fakeToken);
}

// Business logic
container
  .bind<GiftResponder>(TYPES.GiftResponder)
  .to(GiftResponder)
  .inSingletonScope();
container.bind<Villagers>(TYPES.Villagers).to(Villagers).inSingletonScope();
export default container;
