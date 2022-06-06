const isThunderheads = cloud => cloud === 1
const isCumulus = cloud => !isThunderheads(cloud)

function jumpingOnClouds(c) {
  let neighborOfNeighbor
  let jumps = 0

  for (let i = 0; i < c.length; i++) {
    neighborOfNeighbor = c[i + 2]

    // jumps the neighbor cloud to go to the neighbor of this neighbor
    if (isCumulus(neighborOfNeighbor)) i++

    const reachedTheEnd = i >= c.length
    if (reachedTheEnd) break

    jumps++
  }

  return jumps
}
