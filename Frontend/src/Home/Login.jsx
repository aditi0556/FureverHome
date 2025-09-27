"use client";
import React from "react";
import { useState } from "react";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";
import Loader from "./Loader";
export default function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const showError = (msg) => {
    setErr(msg);
    setTimeout(() => {
      setErr("");
      navigate("/login");
    }, 3000); 
  };
 async function handleLogin() {
   setLoader(true);
   try {
     const res = await axios.post("/v1/users/login", formdata, {
       withCredentials: true,
     });
     console.log(res);
     if (res.data.success) {
       setIsAuthenticated(true);
       navigate("/");
     } else {
       setIsAuthenticated(false);
    }
   } catch (err) {
     setIsAuthenticated(false);
     showError("error");
    } finally {
     setLoader(false);
   }
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    console.log("Form submitted");
  };
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 mt-20  md:rounded-2xl md:p-8 dark:bg-black">
      {err && (
        <div className="mb-4 text-sm text-red-600 dark:text-red-400 transition-opacity duration-300">
          Invalid Credentials
        </div>
      )}
      <span
        className="text-blue-600 hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        <MoveLeft />
      </span>
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Don&apos;t have an account?{" "}
        <span
          className="text-blue-600 hover:cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          SignUp
        </span>
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"></div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            minLength={4}
            pattern="^[a-zA-Z0-9_]+$"
            required
            placeholder="username"
            type="username"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            minLength={5}
            pattern="^[a-zA-Z0-9_]+$"
            required
            placeholder="••••••••"
            type="password"
            onChange={handleChange}
          />
        </LabelInputContainer>
        {!loader && (
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
            disabled={loader}
          >
            Login &rarr;
            <BottomGradient />
          </button>
        )}
        {loader && (
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
            disabled={loader}
          >
            <Loader />
            <BottomGradient />
          </button>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
