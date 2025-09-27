import mongoose from "mongoose";
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
});


export default mongoose.model("Pet",petSchema);