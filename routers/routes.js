const express=require('express');
const app = express();
const router=express.Router();
const Details=require('../models/schema')
const jwt=require('jsonwebtoken');
const bcyrpt=require('bcryptjs');
const { Schema } = require('mongoose');
const joi=require('joi')

const s1=require('../models/schema1')

const{registervalidation}=require('../register')

//register
router.post('/register',async(req,res)=>{
   const user= await Details.findOne({mail:req.body.mail})
   if(user) return res.status(400).send('user already exists')

   const{error}=registervalidation(req.body)
   if(error) return res.status(400).send(error.details[0].message)

   const salt= await bcyrpt.genSalt(10);
   const hashedpass= await bcyrpt.hash(req.body.password,salt);


   const details=new Details({
       name:req.body.name,
       mail:req.body.mail,
       password:hashedpass,
       phno:req.body.phno
   });
   try{
    await details.save();
    res.send("user registered succesfully");
   }
   catch(err){
    res.send(err.message)

   }

});

//login

router.post('/login',async(req,res)=>{
    const user=await Details.findOne({mail:req.body.mail})
    if(!user) return res.status(400).send("user not registered")

    const validpass= await bcyrpt.compare(req.body.password,user.password)
    if(!validpass) return res.status(400).send("invalid password")
   
    const token= jwt.sign({mail:user.mail},'dbisufidsisdb')
    res.header('authtoken',token).send({'token':token,"message":`welcome back ${req.body.name}`})

})


//sellers registeration
/*

router.post('/seller',async(req,res)=>{
    
    const user1=await d1.findOne({mail:req.body.mail})
    if(user1) return res.status(400).send("user already exists")

})*/



module.exports=router
