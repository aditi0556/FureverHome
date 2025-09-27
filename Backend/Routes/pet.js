import Pet from "../Models/Pet";
import express from "express";
const route=express.Router();

route.post("/find/:id",(req,res)=>{
    const { id }=req.params;
    const
});

route.get("/",(req,res)=>{
    console.log("Working");
    res.send("Yes");
});


export default route;