import Link from "next/link"

export default function Navbar (){

    return(
        <div className="flex gap-5 bg-red-600/50 text-white mb-7">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <h1>Welcome to my website</h1>
        </div>
    )
}