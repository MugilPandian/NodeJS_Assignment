const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.listen(3030);
console.log("Server is running at port 3030...")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Views/question10.html');
})

app.post('/data',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var ch=req.body.ch;
    var format=req.body.format;
    var sub=req.body.sub;
    var com=req.body.com;
    res.send(`
            <b><table>
                <tr>
                    <td>Name:</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td>Checked:</td>
                    <td>${ch}</td>
                </tr>
                <tr>
                    <td>Format of the Email:</td>
                    <td>${format}</td>
                </tr>
                <tr>
                    <td>Type of Subscription:</td>
                    <td>${sub}</td>
                </tr>
                <tr>
                    <td>Comments:</td>
                    <td>${com}</td>
                </tr>
            </table></b>
            `)
})