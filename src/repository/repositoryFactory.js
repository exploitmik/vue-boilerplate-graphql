import characters from "./repositories/charactersRepository";
import episodes from "./repositories/episodesRepository";
import { createProvider } from "./index.js";

const apolloProvider = createProvider();

const repositories = {
  characters,
  episodes
};

const injectParams = Object.entries(repositories).map(([key, fn]) => [
  key,
  fn.call(this, apolloProvider)
]);

const providerInjected = Object.fromEntries(injectParams);

export const repositoryFactory = {
  get: name => providerInjected[name]
};
