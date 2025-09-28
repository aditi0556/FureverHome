import mongoose from "mongoose";
import Pet from "../Models/Pet.js";
const MONGO_URL="mongodb://127.0.0.1:27017/fureverHome";

main()
 .then(()=>{
    console.log("connected");
 })
 .catch((err)=>{
    console.log(err);
 })

async function main(){
    await mongoose.connect(MONGO_URL);
}
const data = [
  {
    petType: "dog",
    breed: "Golden Retriever",
    name: "Toby",
    vaccinated: "yes",
    gender: "male",
    age: "3",
    reason: "Moving to a place that doesn't allow pets",
    phone: "1234567890",
    address: "123 Maple St, Springfield",
    behaviour: "Very calm and friendly",
    userId: "68d78bcc569af9d6da40908c",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fileName: "sample1",
        publicId: "sample_public_id_1",
      },
    ],
  },
  {
    petType: "cat",
    breed: "Siamese",
    name: "Whiskers",
    vaccinated: "no",
    gender: "female",
    age: "1",
    reason: "Allergy in the family",
    phone: "0987654321",
    address: "456 Oak Rd, Metropolis",
    behaviour: "Playful and energetic",
    userId: "68d78bcc569af9d6da40908c",
    images: [
      {
        url: "https://images.unsplash.com/photo-1669095658634-2a5d9fae6d64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2lhbWVzZXxlbnwwfHwwfHx8MA%3D%3D",
        fileName: "sample2",
        publicId: "sample_public_id_2",
      },
    ],
  },
  {
    petType: "dog",
    breed: "Beagle",
    name: "Max",
    vaccinated: "yes",
    gender: "male",
    age: "4",
    reason: "No time to care",
    phone: "1122334455",
    address: "789 Pine Ln, Gotham",
    behaviour: "Friendly with kids",
    userId: "68d794162b063b0ceb943a9e",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611306133736-56a3b973b2cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVhZ2xlfGVufDB8fDB8fHww",
        fileName: "sample3",
        publicId: "sample_public_id_3",
      },
    ],
  },
  {
    petType: "rabbit",
    breed: "Lop",
    name: "Bunny",
    vaccinated: "no",
    gender: "female",
    age: "2",
    reason: "Relocation",
    phone: "5566778899",
    address: "321 Birch St, Star City",
    behaviour: "Calm and gentle",
    userId: "68d7a028da2ced3620edecee",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww",
        fileName: "sample4",
        publicId: "sample_public_id_4",
      },
    ],
  },
  {
    petType: "cat",
    breed: "Persian",
    name: "Snowball",
    vaccinated: "yes",
    gender: "female",
    age: "5",
    reason: "Moving abroad",
    phone: "6677889900",
    address: "654 Elm Rd, Central City",
    behaviour: "Lazy but affectionate",
    userId: "68d7a028da2ced3620edecee",
    images: [
      {
        url: "https://media.istockphoto.com/id/614613244/photo/white-cat-under-the-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=rscR8QAdGm6RbxjAPzyIz_ZBMbbMKncy_iKkUDLMQlI=",
        fileName: "sample5",
        publicId: "sample_public_id_5",
      },
    ],
  },
  {
    petType: "dog",
    breed: "Poodle",
    name: "Lucky",
    vaccinated: "yes",
    gender: "male",
    age: "3",
    reason: "New baby at home",
    phone: "7788990011",
    address: "987 Cedar St, Coast City",
    behaviour: "Very playful",
    userId: "650b17e2f5e4a22b9c112304",
    images: [
      {
        url: "https://res.cloudinary.com/demo/image/upload/v1/sample6.jpg",
        fileName: "sample6",
        publicId: "sample_public_id_6",
      },
    ],
  },
  {
    petType: "cat",
    breed: "Maine Coon",
    name: "Leo",
    vaccinated: "no",
    gender: "male",
    age: "2",
    reason: "No longer able to take care",
    phone: "8899001122",
    address: "549 Maple Ln, Keystone",
    behaviour: "Curious and friendly",
    userId: "68d7abcb9ff95d6e53506270",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1661546379151-380b344dc3f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFpbmUlMjBjb29ufGVufDB8fDB8fHww",
        fileName: "sample7",
        publicId: "sample_public_id_7",
      },
    ],
  },
  {
    petType: "dog",
    breed: "Labrador",
    name: "Shadow",
    vaccinated: "yes",
    gender: "male",
    age: "1",
    reason: "Too active for current owner",
    phone: "9900112233",
    address: "258 Spruce Rd, Blüdhaven",
    behaviour: "Energetic and friendly",
    userId: "68d7abcb9ff95d6e53506270",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1683134036144-82b0a3d50f11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFicmFkb3J8ZW58MHx8MHx8fDA%3D",
        fileName: "sample8",
        publicId: "sample_public_id_8",
      },
    ],
  },
];

async function addData(){
    const res=await Pet.insertMany(data);
    console.log(res);
}
addData();