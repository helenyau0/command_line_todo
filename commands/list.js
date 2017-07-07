const fs = require('fs')

const list = () => {
  fs.readFile('./tasks.json', 'utf8', (err, data) => {
    if (err) throw err
    const taskArray = JSON.parse(data)
    console.log('ID Description');
    console.log('-- -----------');
    taskArray.forEach((task, i) => console.log(`${i+1}  ${task}`))
    console.log('\n' + taskArray.length + ' tasks.');
  })
}

module.exports = list
