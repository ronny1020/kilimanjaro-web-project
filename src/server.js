import http from 'http'
import app from './app.js'

const port = process.env.port || 3306

const server = http.createServer(app)
server.listen(port)
