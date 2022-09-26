function rotLeft(a, d) {
  const first = a.slice(0, d)
  const last = a.slice(d, a.length)
  return [...last, ...first]
}
