'use client'
// Link Component Navigation
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"
import { useState } from "react"

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
]

// Route Group Course
export default function Authlayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const pathname = usePathname();
    const [input, setInput] = useState('')
    
    return (
        <div>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)

                return (
                    <Link key={link.name} href={link.href} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    > 
                        {link.name}
                    </Link>
                )
            })}  
            {children}  
        </div>
    )
    
}