const fs = require('fs')

const add = (newTask) => {
  fs.readFile('./tasks.json', 'utf-8', (error, data) => {
    if (error) throw error
    if(data) {
      const taskArray = JSON.parse(data)
      taskArray.push(newTask)
      const tasks = JSON.stringify(taskArray)
      fs.writeFile('./tasks.json', tasks, (error, data) => {
        if (error) throw error
        console.log('Created task ' + taskArray.length);
      })
    } else {
      const taskArray = []
      taskArray.push(newTask)
      const tasks = JSON.stringify(taskArray)
      fs.writeFile('./tasks.json', tasks, (error, data) => {
        if (error) throw error
        console.log('Created task ' + taskArray.length);
      })
    }
  })
}

module.exports = add
