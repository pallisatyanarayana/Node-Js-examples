var http=require('http');


http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.end("Hello Node js");
}).listen('8081',function()
{
    console.log("listening port  on 8081...");
});