
const express=require("express");
const app= express();
const env=require('dotenv')


// importing body parser
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
env.config()
// connecting to DB
const mongoose= require("mongoose");
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true},()=>{
    console.log("connected to db");
});
//importing routes
const router=require("./routers/routes");
const { route } = require("./routers/routes");
app.use("/user",router)

app.use("/a",(req,res)=>{
    res.send("hello world")
})
const PORT=4500;
app.listen(PORT,(req,res)=>{
    console.log("server on "+PORT)
})