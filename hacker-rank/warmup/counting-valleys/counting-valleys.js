const isUp = step => step === 'U'
const isDown = step => !isUp(step)

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {
  let reachedSeaLevel, fromAValley
  let numOfValleys = 0
  let seaLevel = 0

  for (let i = 0; i < steps; i++) {
    if (isDown(path[i])) seaLevel--
    else seaLevel++

    reachedSeaLevel = seaLevel === 0
    fromAValley = isUp(path[i])
    if (reachedSeaLevel && fromAValley) numOfValleys++
  }

  return numOfValleys
}
