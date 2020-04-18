import http from 'http'
import app from './app.js'

const port = process.env.port || 6001

const server = http.createServer(app)
server.listen(port)

console.log('server start')
