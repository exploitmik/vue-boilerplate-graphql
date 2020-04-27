<template>
  <div id="app">
    <h1>Boilerplate GraphQL Apollo</h1>
  </div>
</template>

<script>
import { repositoryFactory } from "@/repository/repositoryFactory.js";
const charactersRepository = repositoryFactory.get("characters");
const episodesRepository = repositoryFactory.get("episodes");

export default {
  name: "Home",
  data: () => ({}),
  async mounted() {
    const character = await charactersRepository.getCharacter({
      variables: {
        charId: 2
      }
    });

    const characters = await charactersRepository.get({
      variables: {
        pageIndex: 1
      }
    });

    const episode = await episodesRepository.getEpisode({
      variables: {
        episodeId: 3
      }
    });

    const episodes = await episodesRepository.get({
      variables: {
        pageIndex: 3
      }
    });
  }
};
</script>