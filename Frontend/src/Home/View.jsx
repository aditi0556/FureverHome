import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuroraText } from "@/components/magic-ui/aurora-text";
import styled from "styled-components";
import Sidebar from "./Sidebar";
export default function View() {
  const { id } = useParams();
  // Initialize data as an empty object for safe destructuring access
  const [data, setData] = useState({});
  const navigate = useNavigate();

  async function getInfo() {
    try {
      // Ensure you are using a base URL configuration for relative paths like /v1/pets/getInfo/${id}
      const res = await axios.get(`/v1/pets/getInfo/${id}`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  //here id is userid
  useEffect(() => {
    getInfo();
  }, []);

  // Destructure properties from data for cleaner access
  const { name, petType, breed, age } = data;

  return (
    <>
      <div className="flex flex-row min-h-screen w-screen overflow-x-hidden">
        <Sidebar className="min-h-screen w-64" />
        <div className="flex flex-col justify-center items-center flex-grow">
          <AuroraText className="mx-auto mt-10 text-3xl md:text-5xl font-serif font-extrabold text-center text-gray-800 tracking-tight">
            My Name is {name}
          </AuroraText>
          <div className="flex flex-row my-20">
            <img
              src={data.images?.[0]?.url}
              alt={`${name}'s photo`}
              className="w-full max-w-xs h-auto border-black-2.5 rounded-3xl"
            />

            <div className="px-4 md:px-10 flex flex-col">
              <div className="md:text-4xl text-3xl font-bold mb-4">
                More about {data.name}
              </div>
              <div className="text-xl md:text-2xl font-medium space-y-2">
                <p>
                  <strong>Name:</strong> {data.name}
                </p>
                <p>
                  <strong>Type:</strong> {data.petType}
                </p>
                <p>
                  <strong>Breed:</strong> {data.breed}
                </p>
                <p>
                  <strong>Age:</strong> {data.age}
                </p>
                <p>
                  <strong>Address:</strong> {data.address}
                </p>
                <p>
                  <strong>Gender:</strong> {data.gender}
                </p>
                <p>
                  <strong>Contact No:</strong> +91 {data.phone}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-0.5">
            <h1 className="text-4xl font-bold py-5">More About Me:</h1>
            <p className="text-2xl font-mono">{data.behaviour}</p>
          </div>
          <hr />
          <div className="flex flex-col align-middle">
            <h1 className="text-4xl font-bold py-5">
              Reason For Finding a New Home :
            </h1>
            <p className="text-2xl font-mono">{data.reason}</p>
          </div>
        </div>
      </div>
    </>
  );
  // Removed the unreachable 'return 0;'
}
const StyledWrapper = styled.div`
  .container {
    background-color: transparent;
    background-image: radial-gradient(#000000 1px, #e5e5f7 1px);
    min-height: 100vh; /* minimum full viewport height */
  
    flex-direction: row; /* row layout (sidebar + main content) */
  }
`;
