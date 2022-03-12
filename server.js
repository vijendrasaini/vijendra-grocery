const port =  process.env.PORT|| 7000
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

//setting up api url
server.use(middlewares)
server.use(jsonServer.bodyParser)


server.use(router)
server.listen(port, () => console.log(`JSON Server is running on port ${port}`))
