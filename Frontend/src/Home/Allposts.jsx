import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";
import { AuroraText } from "@/components/magic-ui/aurora-text";
export default function Allposts(){
    const { id }=useParams();
    const navigate=useNavigate();
    const [data,setData]=useState([]);
    const [err,setErr]=useState("");
    async function handleDelete(id){
        try{
            const res=await axios.delete(`/v1/pets/delete/${id}`);
            console.log(res);
            navigate("/adopt");
        }
        catch(err){
            console.log(err);
        }
    }
    async function getInfo(){
        try{
            const res=await axios.get(`/v1/pets/allListings/${id}`);
            console.log(res.data);
            if(!res.data) setErr("No posts");
            setData(res.data);
        }catch(err){
            console.log(err);
            navigate("/login");
        }
    }
    useEffect(()=>{
        getInfo();
    },[]);
    return (
      <>
        <div className="flex flex-row min-h-screen max-w-screen">
          <Sidebar className="min-h-screen w-screen" />
          <div className="flex flex-col mx-auto">
            <AuroraText className="md:text-5xl text-4xl font-bold mt-10 mx-auto">
              Your Posts
            </AuroraText>
            {err && <p>You have no postings!!</p>}
            <div className="flex flex-row flex-wrap mt-10 gap-8 ml-15 ">
              {!err &&
                data.map((event) => (
                  <div
                    key={event._id}
                    className="min-w-64 bg-white border rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <div className="relative max-w-sm h-48 rounded-t-xl overflow-hidden">
                      <img
                        src={event.images?.[0]?.url || ""}
                        alt="Pet"
                        className="w-full h-full object-fit"
                        onClick={() => navigate(`/view/${event._id}`)}
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
                      <a
                        onClick={() => {
                          handleDelete(event._id);
                        }}
                        className="text-md font-bold  text-red-600"
                      >
                        Delete
                      </a>
                      &nbsp;&nbsp;
                      <a
                        className="text-md mx-auto font-bold text-green-600"
                        
                      >
                        Edit
                      </a>
                      {/* <a
                        className="text-md mx-auto font-bold text-green-600"
                        onClick={() => navigate(`/edit/${id}/${event._id}`)}
                      >
                        Edit
                      </a> */}
                    </div>
                  </div>
                ))}
              ;
            </div>
          </div>
        </div>
      </>
    );
}