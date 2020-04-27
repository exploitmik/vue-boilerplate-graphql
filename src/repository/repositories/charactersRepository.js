import { GRAPH_QUERIES_PATH, getGraphFile } from "@/utils/graphql";

export default function({ defaultClient: apollo }) {
  return {
    get({ variables }) {
      return apollo.query({
        query: getGraphFile(GRAPH_QUERIES_PATH, "getCharacters"),
        variables
      });
    },

    getCharacter({ variables }) {
      return apollo.query({
        query: getGraphFile(GRAPH_QUERIES_PATH, "getCharacter"),
        variables
      });
    }
  };
}
