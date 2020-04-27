const GRAPH_QUERIES_PATH = "graphql/queries";
const GRAPH_MUTATIONS_PATH = "graphql/mutations";
// const GRAPH_SUBSCRIPTIONS_PATH = "graphql/queries";
// const GRAPH_FRAGMENTS_PATH = "graphql/queries";

const getGraphFile = (PATH, filename) => {
  return require(`@/${PATH}/${filename}.gql`);
};

export {
  // Const
  GRAPH_QUERIES_PATH,
  GRAPH_MUTATIONS_PATH,
  // Functions
  getGraphFile
};
