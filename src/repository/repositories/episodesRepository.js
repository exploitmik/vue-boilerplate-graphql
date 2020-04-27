import { GRAPH_QUERIES_PATH, getGraphFile } from "@/utils/graphql";

export default function({ defaultClient: apollo }) {
  return {
    get({ variables }) {
      return apollo.query({
        query: getGraphFile(GRAPH_QUERIES_PATH, "getEpisodes"),
        variables
      });
    },

    getEpisode({ variables }) {
      return apollo.query({
        query: getGraphFile(GRAPH_QUERIES_PATH, "getEpisode"),
        variables
      });
    }
  };
}
