'use client'
import Image from "next/image";
import UserContext from "@/components/UserContext";
import HomePage from "@/components/Home";
import { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

export default function Home() {
  useEffect(()=>{
    console.log("Hello");
    
  }),[]// dependency array
  return (
<div className="text-blue-600 text-7xl">welcome to APIConnect...
  <UserContext.Provider value="Bright">
    <HomePage/>
  </UserContext.Provider>
  <FaReact />
  <FcGoogle />
  <FcHome />
</div>
  );
}
