const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {usermodel}=require("./models/user")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/usersDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/login",(req,res)=>{
    res.send("login")
})

app.post("/add",(req,res)=>{
    let input=req.body
    let user=new usermodel(input)
    user.save()
    console.log(user)
   
    res.json({status:"Success"})
})


app.get("/view",(req,res)=>{
    usermodel.find().then((data)=>{
        res.json(data)
    })
})

app.listen(8080,()=>{
    console.log("server started")
})