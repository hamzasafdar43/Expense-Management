const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// Register controller
const registerController = async(req,res)=>{
    try {
        const {email} = req.body
        const user = await userModel.findOne({email:email})
        if(user){
            res.status(200).send({
                success:false,
                message:"User already exist"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password,salt)
        if(!user){
            await userModel.create({
                name:req.body.name,
                email:req.body.email,
                password:hashPassword
            })
        }
        res.status(200).send({
            success:true,
            message:"user register successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"while error in register controller",
            error
        })
    }
}

// Login controller
const loginController = async(req,res)=>{
    try {
        const {email} = req.body
        const users = await userModel.findOne({email:email})
        if(!users){
            res.status(200).send({
                success:false,
                message:"user not found"
            })
        }

        const {password} = req.body
        const compass = await bcrypt.compare(password , users.password)
        if(!compass){
            res.status(200).send({
                success:false,
                message:"correct email and password"
            })
        }
        const token = await jwt.sign({id: users._id} ,process.env.JWT_SECERT ,{expiresIn :"1d"})
        res.status(200).send({
            message:"user successfully login",
            success:true,
            token,
            users
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"while error in login controller",
            error
        }) 
    }
}



module.exports ={registerController ,loginController}
