import http from 'http'
import app from './app.js'

//設定預設埠號為6001，要不然就用系統預設
const port = process.env.port || 6001

//建立伺服器
const server = http.createServer(app)
server.listen(port)
