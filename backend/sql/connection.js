const mysql = require('mysql')
const colors = require('colors')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating MySQL connection...'.blue.bold)
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.70.199.15',
        user: 'root',
        password: 'st!ck33',
        database: 'admin',
        port: 3306
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;