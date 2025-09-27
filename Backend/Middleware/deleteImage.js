import { uploadToCloudinary } from "../cloudConfig.js";
import { v2 as cloudinary } from "cloudinary";
async function deleteImage(req,res,next){
    const files=req.body.images;
    if (!files || files.length === 0) {
      return next(); // no images to delete, proceed to next middleware
    }
    try{
      for(const file of files){
        const publicId=file.publicId;
        const result=await cloudinary.uploader.destroy(publicId,{resource_type:"image"});
      }
      next();
    }catch(err){
      console.error(err);
      res.status(500).json({ err: "Failed to delete image(s)" });
    }
}
export default deleteImage;