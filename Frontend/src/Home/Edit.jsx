import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
export default function  Edit(){
    const {id,petId}=useParams();
    const navigate=useNavigate();
    const url = "../../public/wallpaper.jpg";
     return (
    <div className="relative flex  justify-center items-center mt-8 min-h-screen">
      <div
        className="min-h-screen absolute inset-0"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className=" backdrop-blur-md border font-bold border-white/30 rounded-xl p-3 flex flex-col gap-4 w-full max-w-md"
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
          className="p-2 rounded border text-gray-500 mb-2"
          name="vaccinated"
          required
          value={formData.vaccinated}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select vaccination status
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <select
          className="p-2 rounded border text-gray-500 mb-2"
          name="gender"
          required
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          className="p-2 rounded border text-gray-500 mb-2"
          name="petType"
          required
          value={formData.petType}
          onChange={handleChange}
        >
          <option value="" disabled>
            Pet Type
          </option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="rabbit">Rabbit</option>
          <option value="birds">Birds</option>
        </select>
        <input
          type="text"
          name="breed"
          placeholder="Pet Breed"
          required
          value={formData.breed}
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <select
          className="p-2 rounded border text-gray-500 mb-2"
          name="age"
          required
          value={formData.age}
          onChange={handleChange}
        >
          <option value="" disabled>
            Age
          </option>
          <option value="infant"> &lt;=1 years</option>
          <option value="puppy">1y years&gt; and &lt;=4 years</option>
          <option value="adult">4y years&gt; and &lt;=8 years</option>
          <option value="senior">8y years &gt;</option>
        </select>
        <input
          type="text"
          name="behaviour"
          placeholder="Animal Behavior"
          value={formData.behaviour}
          required
          onChange={handleChange}
          className="p-2 rounded border"
        />
        <input
          type="text"
          name="reason"
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

