const fs = require('fs')

console.log(typeof fs)

const data = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quidem perspiciatis fugit delectus corrupti. Quod error fuga similique dolores ab?'

fs.writeFile('./hello.txt', data, () => {
    console.log('Done writing file...')
})

fs.appendFile('./hello.txt', ' Hey, baby, bay', () =>console.log('File appended...'))