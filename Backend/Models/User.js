import mongoose from "mongoose";
import Pet from "./Pet.js"
import passportLocalMongoose from "passport-local-mongoose";
const Schema=mongoose.Schema;
const userSchema=new Schema({
    email:{
        type:String,
        requires:true,
        unique:true,
    },
    firstName:{
        type:String,
        requires:true,
    },
    lastName:{
        type:String,
    },
    username:{
        type:String,
        minlength:5,
    },
    posts: [{type:Schema.Types.ObjectId,ref:"Pet"}]
    
});
userSchema.plugin(passportLocalMongoose);
export default mongoose.model("User",userSchema);