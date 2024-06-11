const mongoose=require("mongoose")
const schema=mongoose.Schema(

    {
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "blood":{type:String,required:true},
        "mob":{type:String,required:true},
        "addr":{type:String,required:true},
        "pin":{type:String,required:true},
        "dir":{type:String,required:true},
        "pla":{type:String,required:true},
        "email":{type:String,required:true},
        "user":{type:String,required:true},
        "pass":{type:String,required:true}
        
   }

)

let usermodel=mongoose.model("user",schema)
module.exports={usermodel}