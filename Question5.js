const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3030);
console.log("Server is listening on port 3030...");
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send(`<form action="/validate" name="form" method="POST">
    <input type="text" placeholder="Name" id="name" name="name"><br><br>
    <input type="Password" placeholder="Password" name="pwd"><br><br>
    DOB: <input type="Date" name="dob"><br><br>
    Gender: <input type="radio" value="male" name="gen" id="gen">Male
    <input type="radio" name="gen" value="female" id="gen">Female<br><br>
    Remarks: <input type="text" name="rem"><br><br>
    <button type="submit">Submit</button></form>`);
    res.end();
})

app.post('/validate',(req,res)=>{
    var name=req.body.name;
    var pwd=req.body.pwd;
    var dob=req.body.dob;
    var gen=req.body.gen;
    var rem=req.body.rem;
    res.send(`User: ${name}<br>
            Password: ${pwd}<br>
            D.O.B: ${dob}<br>
            Gender: ${gen}<br>
            Remarks: ${rem}`);
})