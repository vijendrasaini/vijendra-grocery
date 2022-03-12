const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);
// const port =  process.env.PORT|| 7000
// const path = require('path')
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router(path.join(__dirname, 'db.json'))
// const middlewares = jsonServer.defaults()

// //setting up api url
// server.use(middlewares)
// server.use(jsonServer.bodyParser)


// server.use(router)
// server.listen(port, () => console.log(`JSON Server is running on port ${port}`))
