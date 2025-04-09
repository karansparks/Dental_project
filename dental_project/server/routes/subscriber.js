const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');
//Getting All

router.get('/',async(req,res)=>{
   try{
    const subscribers = await Subscriber.find();
    res.json(subscribers);
   }catch(err){
    res.status(500).json({messag:err.message});
   }
})
//Getting One

router.get('/:id',(req,res)=>{
    
})
//Creating one
router.post('/',async(req,res)=>{
    const subscriber = new Subscriber({
        fullname: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
        insurance: req.body.insurance,
        Treatment  : req.body.Treatment,
        preTreatment: req.body.preTreatment,
        addTreatment: req.body.addTreatment,
        message: req.body.message,
    })
    try{
        const newsubscriber = await subscriber.save();
        res.status(201).json({message:"Subscriber Created",data:newsubscriber});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
    
})
//updating one
//deleting All
module.exports = router;