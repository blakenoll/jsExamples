const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file')
  src.pipe(res)
})

server.listen(8000)
console.log('server listening on port 8000')


