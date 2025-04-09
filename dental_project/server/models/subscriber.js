const mongoose = require('mongoose');

const appiontment = new mongoose.Schema({
    fullname:{
        type: String,
     
    },
    email:{
        type:String, 
    }
    ,
    phone:{
        type:String, 
    },
    location:{
        type:String, 
    },
    insurance:{
        type:String, 
    },
    email:{
        type:String, 
    },
    Treatment:{
        type:String, 
    },
    preTreatment:{
        type:String, 
    },
    addTreatment:{
        type:String, 
    },
    message:{
        type:String, 
    }
})

module.exports = mongoose.model('appiontment',appiontment)