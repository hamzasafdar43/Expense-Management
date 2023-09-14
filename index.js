const express = require("express")
const router = require("./routes/userRoute")
const routes = require("./routes/transectionRoute")
const colors = require("colors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDB = require("./config/connectDB")
const cors = require("cors")
const bodyparser = require("body-parser")
const app = express()
const PORT = 5000


// config envfile
dotenv.config()

// dataBase call
connectDB()

// middleware 
app.use(bodyparser.json())
app.use(cors())
app.use(express.json())

app.get("/" ,(req,res)=>{
  res.send("hello")
})


app.get("/" , (req ,res)=>{
    res.send("<h1>hella</h1>")
})



// static file access 
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });



// user route
app.use("/" , router)

// transection route
app.use("/" , routes)

app.listen(PORT ,()=>{
  console.log("PORT IS CONNECTED")
})