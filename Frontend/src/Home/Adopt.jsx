import React from "react";
import { useNavigate } from "react-router";
import { useEffect,useState } from "react";
import { SelectDemo } from "./Select";
import { AuroraText } from "@/components/magic-ui/aurora-text";
import Sidebar from "./Sidebar";
import axios from "axios";

const Adopt = () => {
  const [data,setData]=useState([]);
  const navigate=useNavigate();
  const [user,setUser]=useState("");
    async function getUserId() {
      try {
        const res = await axios.get("/v1/users/userid");
        console.log(res);
        setUser(res.data.userId);
      } catch (err) {
        console.log(err);
      }
    }
  async function getData(){
    try{
      const res=await axios.get("/v1/pets/allPets");
      console.log(res.data);
      if(res.data) setData(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getData();
    getUserId();
  },[]);
  return (
    <>
      <div className="flex flex-row max-w-screen ">
        <Sidebar className="min-h-screen"/>
        <div className="flex flex-col mt-10 mx-auto">
          <AuroraText className="mx-auto  text-3xl md:text-5xl font-serif font-extrabold text-center text-gray-800 tracking-tight">
            Find Your Loved Ones
          </AuroraText>
          <div className="flex flex-row mt-20 flex-wrap gap-6 justify-center mx-5 mb-10">
            {data.length > 0 ? (
              data.map((event) => (
                <div
                  key={event._id}
                  className="min-w-64 bg-white border rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/view/${event._id}`)}
                >
                  <div className="relative max-w-sm h-48 rounded-t-xl overflow-hidden">
                    <img
                      src={event.images?.[0]?.url || ""}
                      alt="Pet"
                      className="w-full h-full object-fit"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.name || "Unnamed Pet"}
                    </h3>
                    <span className="text-gray-700 font-medium">
                      {event.petType}
                    </span>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {event.address || "No address provided."}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 mt-20">
                No pets available.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Adopt;
