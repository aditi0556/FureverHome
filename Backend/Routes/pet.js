import Pet from "../Models/Pet.js";
import express from "express";
import ensureAuthenticated from "../Middleware/ensureAuthenticated.js";
import { uploadToCloudinary } from "../cloudConfig.js";
import { upload } from "../Middleware/multerMiddleware.js";
import deleteImage from "../Middleware/deleteImage.js";
const route=express.Router();

//based on search of the petType
route.get("/allListings",async(req,res)=>{
    const {type}=req.query;
    try{
        const result=await Pet.find({petType:type});
        res.send(result);
    }
    catch(err){
        res.status(500).json("Error");
    }
});

//to get the info of all the listing by the user
route.get("/allListings/:user_id", ensureAuthenticated, async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await Pet.find({userId:user_id});
    if (result) res.send(result);
    else res.send([]);
  } catch (err) {
    res.status(500).send({ err: "Error" });
  }
});

//to get the info of the animal with the given id
route.get("/getInfo/:id",ensureAuthenticated,async(req,res)=>{
    const{id}=req.params;
    try{
        const result=await Pet.findById(id);
        if(result) res.send(result);
        else res.send("There is no pet with this id");
    }
    catch(err){
        res.status(500).send({err:"Error"});
    }
});

//to get all the listings not protected
route.get("/allPets",async(req,res)=>{
    try{
        const result=await Pet.find();
        console.log(result);
        res.send(result);
    }catch(err){
        res.status(500).json("Error");
    }
});

//for adding the listing
route.post("/find/:id",ensureAuthenticated,upload.fields([
    { name: "images", maxCount: 4 },
  ]),async (req,res)=>{
    const { id }=req.params;
    try{
        if(req.files) return res.status(404).json("No files uploaded");
        const fileName=[...req.files.images];
        const {
          petType,
          breed,
          name,
          vaccinated,
          gender,
          age,
          reason,
          phone,
          behaviour,
        } = req.body;
        const images=[];
        console.log(fileName);
        for(const file of fileName){
            const path=file.path;
            const response=await uploadToCloudinary(path);
            images.push({fileName:response.original_filename,url:response.url,publicId:response.public_id});
        }
        const newPet = new Pet({
          petType,
          breed,
          name,
          vaccinated,
          gender,
          age,
          reason,
          phone,
          behaviour,
          userId: id,
          images
        });
        await newPet
          .save()
          .then(() => {
            res.json(200).json("Added succesfully");
          })
          .catch((err) => {
            res.status(404).json("Error");
          });
    }catch(err){
        console.log(err);
        res.status(404).json({error:"Error in adding images"});
    }
});

//to edit
route.patch(
  "/edit/:userId/:id",
  ensureAuthenticated,
  upload.fields([{ name: "images", maxCount: 4 }]),
  deleteImage,
  async (req, res) => {
    const { userId, id } = req.params;
    if (req.files) {
      const fileName = [...req.files.images];
      const images = [];
      for (const file of fileName) {
        const path = file.path;
        const response = await uploadToCloudinary(path);
        images.push({
          fileName: response.original_filename,
          url: response.url,
          publicId: response.public_id,
        });
      }
      const {
        petType,
        breed,
        name,
        vaccinated,
        gender,
        age,
        reason,
        phone,
        behaviour,
        userId: userId,
      } = req.body;
      const finalData = {
        petType,
        breed,
        name,
        vaccinated,
        gender,
        age,
        reason,
        phone,
        behaviour,
        userId,
        images,
      };
      try {
        const result = await Pet.findByIdAndUpdate(id, finalData,{runValidators:true,new:true});
        console.log(result);
        res.status(200).json("Updated Succesfully");
      } catch (err) {
        res.status(500).json("Error in adding");
      }
    }
  }
);

//to delete a listing of a user
route.delete("/delete/:id",ensureAuthenticated,async (req,res)=>{
    const {id}=req.params;
    try{
        const result=await Pet.findByIdAndDelete(id);
        res.status(200).json({ success: "Deleted Successfully!!" });
    }catch(err){
        res.status(404).json({error:"Error in deleting"});
    };
})

route.get("/",(req,res)=>{
    console.log("Working");
    res.send("Yes");
});


export default route;