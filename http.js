const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type': 'video/mp4'})
  const stream = fs.createReadStream(path.join(__dirname, './video/Kuroko3_1.mp4'))
  stream.pipe(res)
}).listen(3001,()=>{
  console.log('Listening on 3001')
  console.log(path.join(__dirname, './video/Kuroko3_1.mp4'))
})
