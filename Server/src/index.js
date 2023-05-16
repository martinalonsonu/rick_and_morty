const http = require('http');
const character = require('./utils/data')
const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").at(-1)
    let characterFind = character.find((character) => character.id === Number(id))
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(characterFind));
  }
}).listen(PORT, "localhost")

