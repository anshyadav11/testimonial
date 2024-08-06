import express from "express";
import testimonial from "../schema/testimonialschema.js"
const userrouter=express.Router();
userrouter.post("/testimonial-post",(req,res)=>{
    try {
        
    
if(!req.body.name||!req.body.review){
    res.status(400).send({message:"send all params name and review"})
}
const newrev={
    name:req.body.name,
    review:req.body.review,
}
const reeview=testimonial.create(newrev);
} catch (error) {
        console.log("error form userrouter post");
        res.status(400).send({message:"send all params name and review"});
}

});
export default userrouter;
