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
    async function addPost(e){
        setLoad(true);
        try{
            const res=await axios.post(`/v1/pets/find/${id}`);
            console.log(res);
        }catch(err){

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
        address: "",
        image: null
    })

    const handleChange = (e) => {
        const { name, value, file } = e.target;
        if(name === "image"){
            setFormData({...formData, image: file[0]})
        }else{
            setFormData({...formData, [name]: value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(formData);
        navigate('/adopt')
    }

  return (
    <div className="relative flex  justify-center items-center mt-8 min-h-screen">
      <div
        className="min-h-screen absolute inset-0"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-md border font-bold border-white/30 rounded-xl p-6 flex flex-col gap-4 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Create Adoption Post
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="vaccinated"
          placeholder="Vaccinated"
          value={formData.vaccinated}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="type"
          placeholder="Pet Type"
          value={formData.petType}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="breed"
          placeholder="Pet Breed"
          value={formData.breed}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="behavior"
          placeholder="Animal Behavior"
          value={formData.behaviour}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="description"
          placeholder="Reason for Adoption"
          value={formData.description}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <label className="cursor-pointer bg-white/40 backdrop-blur-md text-gray-500 py-2 px-4 rounded border flex justify-start items-center">
          <input
            type="file"
            name="image"
            placeholder=""
            value={formData.image}
            onChange={handleChange}
            className="p-2 rounded border"
          />
        </label>

        <button className="bg-amber-600  text-white py-2 rounded hover:bg-amber-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form