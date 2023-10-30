
const mongoose=require("mongoose");
const bookschema=mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    summary:{type:String,required:true},
    createdAt:{type:Date,required:true}
},{
    versionKey:false
}
)
const bookmodel=mongoose.model("books",bookschema);
module.exports={
    bookmodel
}