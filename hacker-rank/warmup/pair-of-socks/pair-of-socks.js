const isOdd = n => n % 2 !== 0

function sockMerchant(n, ar) {
  // creates a map for: color (key) => number of socks (value)
  const map = {}

  // populates the map with the correct values
  for (let i = 0; i < n; i++) {
    if (!map[ar[i]]) map[ar[i]] = 1
    else map[ar[i]]++
  }

  // removes the socks without pairs
  for (let [color, sockColorNumber] of Object.entries(map))
    if (isOdd(sockColorNumber)) map[color]--

  return Object.entries(map).reduce((numOfPairs, [_, socksWithPairs]) => {
    numOfPairs += socksWithPairs / 2
    return numOfPairs
  }, 0)
}
