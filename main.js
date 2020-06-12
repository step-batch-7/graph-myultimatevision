const pairs = require("./pairs.json");
const { bfs } = require("./src/graph");

const main = (pairs) => {
  const doesHavePath = bfs(pairs, "aa", "aa");
  console.log(doesHavePath ? "path available" : "path not available");
}

main(pairs);