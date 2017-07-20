const pg = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo_list';
const client = new pg.Client(connectionString);
client.connect();

const addTask = (todo) => {
  if(isNaN(todo)) {
    return client.query('INSERT INTO task(task) VALUES($1)', [todo], (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        return res
      }
      client.end()
    })
  } else {
    completeTask(todo)
  }
}

const completeTask = (id) => {
  return client.query('DELETE FROM task WHERE id=$1', [id], (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      return res
    }
    client.end()
  })
}

module.exports = addTask, completeTask
