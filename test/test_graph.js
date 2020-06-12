const assert = require("assert");
const { bfs } = require("../src/graph");

describe('bfs', () => {
  const pairs = [["aa", "bb"], ["aa", "dd"], ["dd", "cc"], ["cc", "bb"], ["bb", "dd"]];

  it('should return false when target is not present in graph', function() {
    assert.ok(!bfs(pairs, "aa", "jj"));
  });

  it('should return false when there is no path between source and target', function() {
    assert.ok(!bfs(pairs, "dd", "aa"));
  });

  it('should return false when source and target are same and not connected to itself', function() {
    assert.ok(!bfs(pairs, "aa", "aa"));
  });

  it('should return true when source and target are same and connected to itself', function() {
    assert.ok(bfs(pairs, "dd", "dd"));
  });

  it('should return true when there is path between source and target', function() {
    assert.ok(bfs(pairs, "aa", "dd"));
  });
});