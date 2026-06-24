'use client'
import { useState } from "react"
import AboutComponet from "./about"
export default function About (){
    const x = "Brigth"
    return(
        <div>
        <h1>About Us</h1>
        <AboutComponet name={x}/>
        </div>
    )
}