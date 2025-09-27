import mongoose from "mongoose";
import User from "./User.js";
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petType: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  vaccinated:{
    type:String,
    enum:["yes","no"],
    required:true,
  },
  gender:{
    type:String,
    enum:["female","male"],
    required:true,
  },
  age: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    maxLength: 100,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  behaviour: {
    type: String,
    maxLength: 100,
    required: true,
    validate: {
      validator: (v) => v.trim().length > 2,
      message: "description must be at least 3 characters",
    },
  },
  userId:{
    type:Schema.Types.ObjectId,ref:"User",
    required:true,
  },
  images:[{url:{type:String,required:true},fileName:{type:String,required:true},publicId:{type:String}}]
});


export default mongoose.model("Pet",petSchema);