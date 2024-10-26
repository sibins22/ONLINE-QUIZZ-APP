const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req,res){
console.log(req.url)
console.log(req.method)
res.writeHead('200',{'Content-Type':'text/html'})
fs.createReadStream('register.html').pipe(res)
})
server.listen('8000',function(){
console.log("Server started at 8000 in localhost")
})