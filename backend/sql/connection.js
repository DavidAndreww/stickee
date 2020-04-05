const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
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