const pairs = require("./pairs.json");
const { bfs } = require("./src/graph");

const main = (pairs) => {
  const doesHavePath = bfs(pairs, "hh", "ii");
  console.log(doesHavePath ? "path available" : "path not available");
}

main(pairs);