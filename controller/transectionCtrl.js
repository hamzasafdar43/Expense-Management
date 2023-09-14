const transectionModel = require("../models/transectioModel")
const moment = require("moment")
const addtransectionCtrl = async(req,res)=>{
    try {
    const newtransection = new transectionModel(req.body)
        await newtransection.save()
        res.status(200).send({
            success:true,
            message:"transection add successfully"
        })
    } catch (error) {
       console.log(error) 
       res.status(500).send({
        success:false,
        message:"server error add transection",
        error
       })
    }
}

const gettransectionCtrl = async(req,res)=>{
    try {
    const {freequency ,selectDate , type} = req.body
    const {userId} = req.body

    const usertransection =await transectionModel.find({userId,
     
        ...(freequency !== 'custom' ?{
            date:{
                $gt : moment().subtract(Number(freequency) , "d").toDate()
            }
        }:{
            date:{
                $gte : selectDate[0],
                $lte : selectDate[1]
            }
        }),
        ...(type !== "all" && {type})
    })
    res.status(200).json(usertransection)
    } catch (error) {
    console.log(error)
     res.status(500).send({
        success:false,
        message:"server error add transection",
        error
         })
    }
}


//  =============== Delete Transection Controller ==============

const deletetransectionController = async(req , res)=>{
    try {
        await transectionModel.findOneAndDelete({_id:req.body.transectionId})
        res.status(200).send({
            success:true,
            message:"Delete transection successfully"
        })
    } catch (error) {
       console.log(error) 
       res.status(500).json(error)
    }
}

// =======================  edittransectionController =======================

const edittransectionController = async(req , res) =>{
try {
    await transectionModel.findOneAndUpdate({_id:req.body.transectionId} ,req.body.payload)
    res.status(200).send({
        success:true,
        message:"Update Transection"
    })
} catch (error) {
   console.log(error) 
   res.status(500).json(error)
}
}

module.exports = 
{
    addtransectionCtrl ,
    gettransectionCtrl, 
    deletetransectionController,
    edittransectionController
}