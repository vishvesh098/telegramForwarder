const db = require('./database');

async function main() {
  const r = await db.saveFilter(2, 'containsWord', 1, 'aditya, teste');
  console.log(r);
  // await db.addFilter()
}

main();