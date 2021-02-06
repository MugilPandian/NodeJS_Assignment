const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3030);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
console.log("Server is listening at port 3030");
app.get('/',(req,res)=>{
    res.status(404).send(`<h1>404: Page Not Found.`);
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/Views/home.html');
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/Views/login.html');
})

app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/Views/signup.html');
})

app.get('/user/fgpwd',(req,res)=>{
    res.sendFile(__dirname+'/Views/forgotpassword.html');
})

