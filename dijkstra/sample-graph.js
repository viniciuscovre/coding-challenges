const { WeightedGraph } = require('./weighted-graph');

const sampleGraph = new WeightedGraph();

// NODES
sampleGraph.addNode('A');
sampleGraph.addNode('B');
sampleGraph.addNode('C');
sampleGraph.addNode('D');
sampleGraph.addNode('E');
sampleGraph.addNode('F');
sampleGraph.addNode('G');

// EDGES
sampleGraph.addEdge('A', 'B', 4);
sampleGraph.addEdge('A', 'C', 3);
sampleGraph.addEdge('A', 'E', 7);

sampleGraph.addEdge('B', 'D', 5);
sampleGraph.addEdge('B', 'C', 6);

sampleGraph.addEdge('C', 'D', 11);
sampleGraph.addEdge('C', 'E', 8);

sampleGraph.addEdge('D', 'E', 2);
sampleGraph.addEdge('D', 'F', 2);
sampleGraph.addEdge('D', 'G', 10);

sampleGraph.addEdge('E', 'G', 5);

sampleGraph.addEdge('F', 'G', 3);

module.exports = { sampleGraph };
