class WeightedGraph {
  constructor() {
    this.nodes = [];
    this.adjacentNodes = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacentNodes[node] = [];
  }

  addEdge(nodeA, nodeB, weight) {
    this.adjacentNodes[nodeA].push({ node: nodeB, weight });
    this.adjacentNodes[nodeB].push({ node: nodeA, weight });
  }
}

module.exports = { WeightedGraph };
