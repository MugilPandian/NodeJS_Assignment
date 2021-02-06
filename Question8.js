const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3030);
console.log("Server is listening on port 3030...");
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send(`<form action="/validate" name="form" method="POST">
            <input type="text" placeholder="Name" name="name"><br><br>
            <input type="password" placeholder="Password" name="pwd"><br><br>
            <button type="submit">Submit</button></form>`);
    res.end();
})
app.post('/validate',(req,res)=>{
    var name=req.body.name;
    var pwd=req.body.pwd;
    if(name==='John'&&pwd==='123123'){
    res.send(`<h1>Welcome ${name},</h1><br>
            <h2>Good Morning!!!</h2>`);
    res.end();
    }
    else{
        res.end(`Invalid Login Name or Password`);
    }
})