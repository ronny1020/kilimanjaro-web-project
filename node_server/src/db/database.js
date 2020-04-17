import mysql from 'mysql2'

// 資料庫連結資訊
const connection = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coffee',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

// 一般使用
const pool = mysql.createPool(connection)

// promise用
const promisePool = pool.promise()

export default {
  pool,
  promisePool,
}
