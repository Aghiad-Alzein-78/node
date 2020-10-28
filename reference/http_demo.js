const http=require('http')


http.createServer((req,res)=>{
    res.write("<h2>Hello World</h2>")
    res.end()
}).listen(5000,console.log("SERVER IS RUNNING"))