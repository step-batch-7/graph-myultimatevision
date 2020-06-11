//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const modifyJsonFormat = (pairs) => {
  const new_pairs = {};
  for (let index = 0; index < pairs.length; index++) {
    const [from, to] = pairs[index];
    if (Object.keys(new_pairs).includes(from)) {
      new_pairs[from].push(to);
    }
    else {
      new_pairs[from] = [to];
    }
  }
  return new_pairs;
}

const bfs = function(pairs, source, target) {
  const new_pairs = modifyJsonFormat(pairs);
};

module.exports = { bfs };
