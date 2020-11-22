import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { Bot } from "./bot";
import { Client } from "discord.js";
import { MessageResponder } from "./services/message-responder";
import { PingFinder } from "./services/ping-finder";
import { Villagers } from "./villagers";
import { GiftParser } from "./parser";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
const fakeToken = "fake token";
if (process.env.TOKEN !== undefined) {
  container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
} else {
  container.bind<string>(TYPES.Token).toConstantValue(fakeToken);
}
container
  .bind<MessageResponder>(TYPES.MessageResponder)
  .to(MessageResponder)
  .inSingletonScope();
container.bind<PingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();

// Business logic
container.bind<Villagers>(TYPES.Villagers).to(Villagers).inSingletonScope();
container.bind<GiftParser>(TYPES.GiftParser).to(GiftParser).inSingletonScope();

export default container;
