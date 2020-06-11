const pairs = require("./pairs.json");
const { bfs } = require("./src/graph");

const main = (pairs) => {
  bfs(pairs);
}

main(pairs);