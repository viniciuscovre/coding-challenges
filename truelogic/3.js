/**
Write a mini REST API that meets following requirements:
-Listens on port 4000
-For GET requests:
  X-Api-Secret header is mandatory
  If X-Api-Secret is present, respond with successful code
  If X-Api-Secret is NOT present, respond with error code and with a json object { error: "missing X-Api-Secret" }
-Make a demo of your REST API which should run using the command:
  npm run dev
*/

const express = require('express')
const PORT = 4000

const app = express();

app.get('/challenge', (req, res) => {
  const secret = req.header('X-Api-Secret');

  if (!secret)
    return res.status(400).json({ error: "missing X-Api-Secret" });

  return res.status(200).json({ valid: true });
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
