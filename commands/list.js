const fs = require('fs')

const list = () => {
  fs.readFile('./tasks.json', 'utf8', (err, data) => {
    if (err) throw err
    const taskArray = JSON.parse(data)
    console.log('ID Description');
    console.log('-- -----------');
    // you should only use the `x => y` function syntax when the return value is used
    // example: `[1,2,3].map(n => n + 10)`
    // in this case do 
    taskArray.forEach((task, index) => {
      console.log(`${index+1}  ${task}`) 
    })
    // also avoid small variable names like `i` use a clear and specific variable whenever possible
    console.log('\n' + taskArray.length + ' tasks.');
  })
}

module.exports = list
