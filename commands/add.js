const fs = require('fs')
const addTask = require('../database')

const add = (newTask) => {
  fs.readFile('./tasks.json', 'utf-8', (error, data) => {
    if (error) throw error
    const taskArray = []
    if(data) {
      const taskArray = JSON.parse(data)
      taskArray.push(newTask)
      const tasks = JSON.stringify(taskArray)
      addToFile(tasks)
      console.log('Created task ' + taskArray.length);
    } else {
      taskArray.push(newTask)
      const tasks = JSON.stringify(taskArray)
      addToFile(tasks)
      console.log('Created task ' + taskArray.length);
    }
    addTask(newTask)
  })
}

const addToFile = (tasks) => {
  fs.writeFile('./tasks.json', tasks, (error, data) => {
    if (error) throw error
  })
}

module.exports = add
