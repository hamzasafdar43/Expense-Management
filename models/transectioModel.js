const mongoose = require("mongoose")


const transectionSchema = mongoose.Schema({
    userId:{
        type:String,
        require:[true , 'userid is required']
    },
    amount:{
        type:Number,
        require:[true , 'amount is required']
    },
    type:{
        type:String,
        require:[true , 'type is required']
    },
    catagory:{
        type:String,
        require:[true , 'catagory is required']
    },
    reference:{
        type:String,
        require:[true , 'reference is required']
    },
    description:{
        type:String,
        require:[true , 'description is required']
    },
    date:{
        type:Date,
        require:[true,'date is required']
    }

})

const transectionModel = mongoose.model("trnsection" , transectionSchema)
module.exports = transectionModel