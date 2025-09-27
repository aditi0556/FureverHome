import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router';
import Navbar from './Navbar'
import axios from 'axios';
import Loader from './Loader';
const Form = () => {
    const navigate = useNavigate()
    const {id}=useParams();
    const url = '../../public/wallpaper.jpg'
    const [load,setLoad]=useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const [err,setErr]=useState("");
    function errorMess(){
        setErr("Error in Adding.Please try again!!");
        setTimeout(()=>{
            setErr("");
        },3000);
    }
    async function addPost(data){
        setLoad(true);
         const form = new FormData();
         for (const key in data) {
           if (key !== "images") {
             form.append(key, data[key]);
           }
         }
        if (Array.isArray(data.images)) {
          data.images.forEach((file) => data.append("images", file));
        } else if (data.images) {
          data.append("images", data.images);
        }

        try{
            const res = await axios.post(`/v1/pets/find/${id}`, form, {
              headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(res);
        }catch(err){
            console.log(err);
            errorMess();
        }
        finally{
            setLoad(false);
        }
    }
    const [formData, setFormData] = useState({
        petType: "",
        breed: "",
        age: "",
        name: "",
        vaccinated: "",
        gender: "",
        behaviour: "",
        description: "",
        phone: "",
    })

    const handleChange = (event) => {
        if(event.target.name=="images"){
            console.log(event.target.files);
             setImageFiles((prev) => [...prev, event.target.files[0]]);
        }else{
            setFormData(()=>{
                return {...formData, [event.target.name]:event.target.value}
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(formData);
    }

  return (
    <div className="relative flex  justify-center items-center mt-8 min-h-screen">
      <div
        className="min-h-screen absolute inset-0"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className=" backdrop-blur-md border font-bold border-white/30 rounded-xl p-6 flex flex-col gap-4 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Create Adoption Post
        </h2>
        {err && (
          <div className="mb-4 text-sm text-red-600 dark:text-red-400 transition-opacity duration-300">
            {err}
          </div>
        )}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />
        <select
          name="vaccinated"
          placeholder="Vaccinated"
          value={formData.vaccinated}
          required
          onChange={handleChange}
          className="p-2 rounded border text-gray-500"
        >
            <option value="">Vaccinated?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>    
        <select
          type="text"
          name="gender"
          value={formData.gender}
          required
          onChange={handleChange}
          className="p-2 rounded border text-gray-500"
        >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="petType"
          placeholder="Pet Type"
          value={formData.petType}
          required
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="breed"
          placeholder="Pet Breed"
          required
          value={formData.breed}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          required
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="behaviour"
          placeholder="Animal Behavior"
          value={formData.behaviour}
          required
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Reason for Adoption"
          value={formData.description}
          required
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          value={formData.phone}
          required
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          required
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <label className="cursor-pointer bg-white/40 backdrop-blur-md text-gray-500 py-2 px-4 rounded border flex justify-start items-center">
          <input
            type="file"
            name="images"
            required
            onChange={handleChange}
            multiple
            className="p-2 rounded border"
          />
        </label>

        {!load && (
          <button className="bg-amber-600  text-white py-2 rounded hover:bg-amber-700 transition">
            Submit
          </button>
        )}
        {load && (
          <button className="bg-amber-600  text-white py-2 rounded hover:bg-amber-700 transition">
            <Loader />
          </button>
        )}
      </form>
    </div>
  );
}

export default Form