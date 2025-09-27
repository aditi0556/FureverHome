import mongoose from "mongoose";
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
    }
});
userSchema.plugin(passportLocalMongoose);
export default mongoose.model("User",userSchema);