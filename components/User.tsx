"use client"

import { useContext } from "react"
import UserContext from "./UserContext"

export default function User (){
    const x = useContext(UserContext)
    return(
        <main>
            {x}
        </main>
    )
}