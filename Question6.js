const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3030);
console.log("Server is listening on port 3030...");
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send(`<form action="/validate" name="form" method="POST">
            <input type="email" placeholder="Email" name="email"><br><br>
            <input type="password" placeholder="Password" name="pwd"><br><br>
            <button type="submit">Submit</button></form>`);
    res.end();
})
app.post('/validate',(req,res)=>{
    var email=req.body.email;
    var pwd=req.body.pwd;
    res.send(`User: ${email}<br>
            Password: ${pwd}`);
    res.end();
})