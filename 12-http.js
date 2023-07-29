const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to our home page');
  }
  if(req.url === '/about'){
    res.end('Here is our short history');
  }
  res.end(`
  <h1>OOps</h1>
  <p>We can't seem to find the page you rare lokking for</p>
  <a href="./">Home Page </a>
  `)
})

server.listen(5000,()=>{
  console.log('server is running');
  
});