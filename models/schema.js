const mongoose=require("mongoose");
// creating a schema

const schema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  mail:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    min:8
  },
  phno:{
    type:String
  }

},{collection:'ecommerce'});

module.exports=mongoose.model("schema",schema);