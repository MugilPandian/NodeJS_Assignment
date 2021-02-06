const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3030);
console.log("Server is running at port 3030...")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/markentry',(req,res)=>{
    res.sendFile(__dirname+'/Views/markentry.html');
})

app.post('/marksheet',(req,res)=>{
    var name=req.body.sname;
    var fname=req.body.fname;
    var iname=req.body.iname;
    var batch=req.body.batch;
    var sub1=req.body.oauto;
    var sub2=req.body.web;
    var sub3=req.body.it;
    var sub4=req.body.cprog;
    res.send(`
            <h2><u>Student Marksheet:</u></h2>
            <table>
                <tr>
                    <td>Student Name:</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Father Name:</td>
                    <td>${fname}</td>
                </tr>
                <tr>
                    <td>Institute Name:</td>
                    <td>${iname}</td>
                </tr>
                <tr>
                    <td>Batch:</td>
                    <td>${batch}</td>
                </tr>
                <tr>
                    <td><b><u>Student Marks:</u></b></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Office Automation:</td>
                    <td>${sub1}</td>
                </tr>
                <tr>
                    <td>Web Designing:</td>
                    <td>${sub2}</td>
                </tr>
                <tr>
                    <td>IT:</td>
                    <td>${sub3}</td>
                </tr>
                <tr>
                    <td>C# Programming:</td>
                    <td>${sub4}</td>
                </tr>
            </table>
            `);
})