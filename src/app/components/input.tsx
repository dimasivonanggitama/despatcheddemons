"use client"
import { useState } from "react"

interface Props {
    type: string
    name: string
    placeholder?: string
}

export default function Input({name, placeholder, type} : Props) {
    const [isInputFilled, setIsInputFilled] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        if (name === "username") {
            if (value !== "") setIsInputFilled(true);
            else setIsInputFilled(false);
            // if (isUsernameValid)
        }
        else if (name === "password") {
            if (value !== "") setIsInputFilled(true);
            else setIsInputFilled(false);
            // if (isUsernameValid)
        }
    }
    return <div className="min-w-full">
        <p className={`pl-2.5 transition-all ease-out duration-500 ${isInputFilled? 'h-6 opacity-100' : 'h-0 opacity-0'} overflow-hidden`}>{placeholder}</p>
        <div className={`
            p-1
            ${isInputFilled? 'bg-red-500' : 'bg-transparent'}
            duration-500 
            ease-out 
            min-w-full
            overflow-hidden
            rounded-md
            transition-all
            ${isInputFilled? 'h-20' : 'h-12'}
        `}>
            <input type={type} name={name} placeholder={placeholder} onChange={handleChange} className={`
                bg-white
                duration-500
                border
                border-gray-400
                focus:outline-none
                focus:bg-gray-100
                hover:bg-gray-200
                min-w-full
                p-2
                rounded-md
                text-black
            `}/>
            <p className={`p-1 pb-0 text-white transition ease-out duration-500 ${isInputFilled? 'opacity-100' : 'opacity-0'}`}>This is Error Message</p>
        </div>
    </div>
}