const http = require('http')
const server = http.createServer(function(req,res){
    res.writeHead('200',{'content-type ': 'text/html'})
    fs.createreadstream('register.html').pipe(res)
    
})

server.listen('6000',function(){
    console.log("server started at 6000 in localhost")
})