const fs = require('fs')
const completeTask = require('../database')

const done = (complete) => {
  fs.readFile('./tasks.json', 'utf-8', (error, data) => {
    if (error) throw error
    const taskArray = JSON.parse(data)
    const completed = taskArray.splice(complete-1, 1)
    const newTaskArray = JSON.stringify(taskArray)
    fs.writeFile('./tasks.json', newTaskArray, (error, data) => {
      if (error) throw error
      completeTask(complete)
      console.log('Completed the task ' + completed);
    })
  })
}

module.exports = done
