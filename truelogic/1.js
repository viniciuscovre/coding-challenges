const dbQuery = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Results for db query: ${query}`)
    }, 1000 * Math.floor(5 * Math.random()));
  })
}
const queries = ['Query 1', 'Query 2', 'Query 3', 'Query 4', 'Query 5'];

//Fix this snippet  of code so that it prints the query results:
queries.forEach(q => dbQuery(q).then(console.log));

const run1 = async () => {
  for (const query of queries) {
    const result = await dbQuery(query);
    console.log(result);
  }
}

const run2 = async () => {
  const promises = []

  for (const query of queries) {
    promises.push(dbQuery(query))
  }

  const results = await Promise.all(promises);
  console.log(results);
}

run2();
