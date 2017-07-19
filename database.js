const pg = require('pg')
const add = require('./commands/add')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo_list';
const client = new pg.Client(connectionString);
client.connect();

const addTask = (todo) => {
  return client.query('INSERT INTO task(add) VALUES($1)', [todo], (err, res) => {
    if (err) {
      console.log('whaaat',err.stack)
    } else {
      return res
    }
    client.end()
  })
}

module.exports = addTask
