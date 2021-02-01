const { sampleGraph } = require('./sample-graph');
const PritorityQueue = require('./priority-queue');

const findPath = (graph, initialNode, finalNode) => {
  const backtrace = {};
  const distances = {};
  const queue = new PritorityQueue();

  graph.nodes.forEach(node => { distances[node] = Infinity });
  distances[initialNode] = 0;
  queue.enqueue({ node: initialNode, distance: distances[initialNode] })

  while (!queue.isEmpty()) {
    let shortestStep = queue.dequeue();
    let currentNode = shortestStep.node;

    graph.adjacentNodes[currentNode].forEach(neighbour => {
      let distance = distances[currentNode] + neighbour.weight;

      if (distance < distances[neighbour.node]) {
        distances[neighbour.node] = distance;
        backtrace[neighbour.node] = currentNode;
        queue.enqueue({ node: neighbour.node, distance });
      }
    });
  };

  const path = [finalNode];
  let lastStep = finalNode;

  while(lastStep !== initialNode) {
    path.unshift(backtrace[lastStep]);
    lastStep = backtrace[lastStep];
  }

  console.log('Shortest path:', path);
  console.log('Distance:', distances[finalNode]);
};

findPath(sampleGraph, 'A', 'F');
