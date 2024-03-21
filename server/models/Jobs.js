const mongoose=require("mongoose");

const Jobs=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    location:{
        type:String
    },
    img:{
        type:String
    },
    price:{
        type:String
    }
})

module.exports=mongoose.model("Jobs",Jobs);