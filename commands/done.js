const fs = require('fs')

const done = (complete) => {
  fs.readFile('./tasks.json', 'utf-8', (error, data) => {
    if (error) throw error
    const taskArray = JSON.parse(data)
    const completed = taskArray.splice(complete-1, 1)
    const newTaskArray = JSON.stringify(taskArray)
    fs.writeFile('./tasks.json', newTaskArray, (error, data) => {
      if (error) throw error
      console.log('Completed the task ' + completed);
    })
  })
}

module.exports = done
