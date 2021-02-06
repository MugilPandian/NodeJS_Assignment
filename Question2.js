const http=require('http');
const server=http.createServer(function (request, response) {
        if(request.url==='/login/db/et'){
        response.writeHeader(200,{'content-type':'text/html'});
        response.write('<b>Hi user, You are accessing the following URL</b>');
        response.write('<br><br>URL: http://localhost:3000'+request.url);
        response.end('<br><br>Method: '+request.method);
        }
    })
server.listen(3000,()=>{
    console.log("Server is running at port 3000...");
});
