"use client"
import Navbar from "@/components/Navbar";
import { useState } from "react";


export default function Home() {
  let x = 50
  let [like ,setlike]= useState(0)
  return (
    <div>
      <Navbar/>
<h1 className="text-blue-600 text-7xl">welcome to APIConnect...</h1>
    
  {x}
  <div className="flex items-center gap-10 mx-10">
    <p className="text-6xl font-bold">{like}</p>
    <button className="bg-green-800/70 text-white text-3xl p-5" onClick={()=>setlike(like + 1)}>update</button>
    <button className={`bg-yellow-700/60 text-white text-3xl p-5 ${like === 0? "hidden" : "" }`} onClick={()=>setlike(like - 1)}>minus</button>
    <button className={`bg-red-500/50 text-white text-3xl p-5 ${like === 0? "hidden" : "" }`} onClick={()=>setlike(like = 0)}>reset</button>
    
    
  </div>
</div>
  );
}
