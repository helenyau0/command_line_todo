const fs = require('fs')
const addTask = require('../database')

const add = (newTask) => {
  // this fs.readFile is duplicated in at least 3 places. Dry that up by putting it in one place and requireing it so
  // your code is shared and this information only lives in one place
  // also: this path './tasks.json' will only work if you run your CLI from the right directory.
  // try: `fs.readFile(__dirname+'/../tasks.json' …`
  fs.readFile('./tasks.json', 'utf-8', (error, data) => {
    if (error) throw error
    if(data) {
      const taskArray = JSON.parse(data)
      taskArray.push(newTask)
      const tasks = JSON.stringify(taskArray)
      //this write is also a duplicate and should be dried up
      fs.writeFile('./tasks.json', tasks, (error, data) => {
        if (error) throw error
        addTask(newTask)
        console.log('Created task ' + taskArray.length);
      })
    } else {
      const taskArray = []
      taskArray.push(newTask)
      const tasks = JSON.stringify(taskArray)
      fs.writeFile('./tasks.json', tasks, (error, data) => {
        if (error) throw error
        addTask(newTask)
        console.log('Created task ' + taskArray.length);
      })
    }
  })
}

// also you can dry up even more duplication like this
const add = (newTask) => {
  fs.readFile(__dirname+'/../tasks.json', 'utf-8', (error, data) => {
    if (error) throw error
    const tasks = data ? JSON.parse(data) : []
    tasks.push(newTask)
    const json = JSON.stringify(tasks)
    fs.writeFile(__dirname+'/../tasks.json', json, (error) => {
      if (error) throw error
      console.log('Created task ' + tasks.length);
    })
  })
}


module.exports = add
