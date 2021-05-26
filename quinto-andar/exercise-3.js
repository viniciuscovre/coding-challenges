const A = [10, 0, 8, 2, -1, 12, 11, 3];

const solution = A => {
  const positions = setPostions(A);
  const free = positions.filter(pos => !pos.occupied);

  let curr = free[0];
  let i = 0;
  let counter = 0;
  while (i < free.length) {
    const next = free[i + 1];
    if (next.idx - curr.idx === 1) {
      counter++;
    }
  }
}

const setPostions = arr => {
  const { min, max } = getRange(arr);
  const positions = Array.from({ length: max - min + 1 }, (curr, idx) => {
    const pos = max - idx;
    return {
      idx: pos,
      occupied: isOccupied(arr, pos)
    }
  }).reverse();
  return positions;
}

const getRange = arr => {
  const min = Math.min.apply(Math, arr);
  const max = Math.max.apply(Math, arr);
  return { min, max }
}

const isOccupied = (arr, idx) => {
  const found = arr.find(el => el === idx);
  if (found !== undefined)
    return true;
  return false;
}