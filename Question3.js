const http=require('http');
const server=http.createServer((request,response)=>{
    if(request.url==='/'){
    response.writeHead(200,{'content-type':'text/html'});
    response.write('<form action="/validate" method="POST"><input type="text" placeholder="Name" id="name" name="name"><br><br>');
    response.write('<input type="Password" placeholder="Password" name="pwd"><br><br>');
    response.write('DOB: <input type="Date" name="dob"><br>');
    response.write('Gender: <input type="radio" value="male" name="gen" id="gen">Male');
    response.write('<input type="radio" name="gen" value="female" id="gen">Female<br><br>');
    response.write('Remarks: <input type="text" name="rem"><br><br>');
    response.write('<button type="submit">Submit</button></form>');
    response.end();
    }
    if(request.url==='/validate'&&request.method==='POST'){
        var arr=[];
        var name;
        var pwd;
        var dob;
        var gen;
        var rem;
        request.on('data',chunk=>{
            arr.push(chunk);
        });
        request.on('end',()=>{
            arr=Buffer.concat(arr).toString();
            name=arr.split('&')[0].split('=')[1];
            pwd=arr.split('&')[1].split('=')[1];
            dob=arr.split('&')[2].split('=')[1];
            gen=arr.split('&')[3].split('=')[1];
            rem=arr.split('&')[4].split('=')[1];
            response.writeHead(200,{'content-type':'text/html'});
            response.end(`<b>Welcome ${name} <br><br>
                            pwd: ${pwd} <br><br>
                            DOB: ${dob}<br><br>
                            Gender: ${gen}<br><br>
                            Remarks: ${rem}</b>`);

        });
    }

}).listen(3030,()=>{
    console.log("Server is listening at port 3030");
});
