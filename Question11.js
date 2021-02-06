const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3030);
console.log("Server is running at port 3030...")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Views/question11.html');
})

app.post('/data',(req,res)=>{
    var acc=req.body.acc;
    var fname=req.body.fname;
    var mname=req.body.mname;
    var lname=req.body.lname;
    var suffix=req.body.suffix;
    var tax=req.body.tax1+'-'+req.body.tax2+'-'+req.body.tax3;
    var dob=req.body.dob1+'/'+req.body.dob2+'/'+req.body.dob3;
    var add=req.body.add1+','+req.body.add2+','+req.body.add3;
    var city=req.body.city;
    var state=req.body.state;
    var zip=req.body.zip1+'-'+req.body.zip2;
    var ph=req.body.ph1+' '+req.body.ph2+'-'+req.body.ph3;
    var driv=req.body.driv;
    var istate=req.body.istate;
    var ed=req.body.ed1+'/'+req.body.ed2+'/'+req.body.ed3;
    res.send(`
            <b><table>
                <tr>
                    <td>Account Type:</td>
                    <td>${acc}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>${suffix} ${fname} ${mname} ${lname}</td>
                </tr>
                <tr>
                    <td>Taxpayer Identification Number:</td>
                    <td>${tax}</td>
                </tr>
                <tr>
                    <td>Date of Birth:</td>
                    <td>${dob}</td>
                </tr>
                <tr>
                    <td>Street Address:</td>
                    <td>${add}</td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td>${city}</td>
                </tr>
                <tr>
                    <td>State:</td>
                    <td>${state}</td>
                </tr>
                <tr>
                    <td>Zip Code:</td>
                    <td>${zip}</td>
                </tr>
                <tr>
                    <td>Home Phone:</td>
                    <td>${ph}</td>
                </tr>
                <tr>
                    <td>Driver's License/State ID Number:</td>
                    <td>${driv}</td>
                </tr>
                <tr>
                    <td>Issuing State:</td>
                    <td>${istate}</td>
                </tr>
                <tr>
                    <td>Expiration Date:</td>
                    <td>${ed}</td>
                </tr>
            </table></b>
            `)
})