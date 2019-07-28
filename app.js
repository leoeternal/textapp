var express=require("express");
var bodyParser=require("body-parser");
var Nexmo=require("nexmo");
var ejs=require("ejs");
var socketio=require("socket.io");

var app=express();

var nexmo=new Nexmo({
    apiKey:"929118ca",
    apiSecret:"Hn2T1Q369QHSaFVk"
},{debug:true})

app.engine("html",ejs.renderFile); 

app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get("/",function(req,res){
    res.render("index.html");
})

app.post("/",function(req,res){
    var number=req.body.number;
    var text=req.body.text;
    
    nexmo.message.sendSms("NEXMO",number,text,{type:"unicode"},function(err,responseData){
        if(err){
            console.log(err);
        }else{
            console.dir(responseData);
        }
    })
})






app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started");
})