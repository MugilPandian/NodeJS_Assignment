const http=require('http');
const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.writeHead(200,{'content-type':'text/html'});
        response.write('<form action="/validate" method="POST">');
        response.write('<input type="email" name="mail" placeholder="Email"><br><br>');
        response.write('<input type="password" name="pwd" placeholder="Password"><br><br>');
        response.end('<button type="submit">Submit</button>');
    }
    if(request.url==='/validate'&&request.method==='POST'){
        var arr=[];
        var email;
        var pwd;
        request.on('data',chunk=>{
            arr.push(chunk);
            console.log(chunk);
        });
        console.log(arr);
        request.on('end',()=>{
            arr=Buffer.concat(arr).toString();
            console.log(arr);
            email=arr.split('&')[0].split('=')[1];
            pwd=arr.split('&')[1].split('=')[1];
            response.writeHead(200,{'content-type':'text/html'});
            response.end(`<b>Welcome ${email} <br><br>
                            pwd: ${pwd}</b>`);
        });
    }
})
server.listen(3030,()=>{
    console.log("Server is running at port 3030...");
});
