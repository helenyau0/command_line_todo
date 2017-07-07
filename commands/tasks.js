const list = require('./list')
const add = require('./add')
const done = require('./done')

const todo = () => {
  const command = process.argv[2]
  const task = process.argv[3]

  if(command === 'list') {
    list()
  } else if(command === 'add') {
    add(task)
  } else if(command === 'done') {
    done(task)
  }
}

todo()
