const express=require("express");
const app=express();
const bookRouter=express.Router();
const {bookmodel}=require("../Models/books.models")

app.use(express.json());

bookRouter.get("/all",async(req,res)=>{

    try{
      const notes= await bookmodel.find();
        res.status(200).send(notes)
    }
    catch (error) {
        res.status(500).send({msg:"Something went wrong",error:error.message})
    }
        
});


bookRouter.post("/create",async(req,res)=>{
    try {
        const payload=req.body;
        const newbook= await bookmodel(payload);
        newbook.save();
        res.status(200).send("New book data recorded")
    } catch (error) {
        res.status(500).send({msg:"Something went wrong",error:error.message})
    }
});


bookRouter.patch("/update/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const payload=req.body;
        await bookmodel.findByIdAndUpdate(id,payload)
        res.status(200).send({"msg":`note with id:${id} has been updated`})
    } catch (error) {
        res.status(500).send({msg:"something went wrong",error:error.message})
    }
});



bookRouter.delete('/delete/:id',async(req,res)=>{
    try{
        const bookId=req.params.id;
        await bookmodel.findByIdAndDelete({_id:bookId})
        res.status(200).send({"msg":`note with id:${bookId} has been deleted`});
    }
    catch (error) {
        res.status(500).send({msg:"Something went wrong",error:error.message})
    }
});


module.exports={
    bookRouter
}