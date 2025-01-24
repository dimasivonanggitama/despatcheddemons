import { ReactNode } from "react";
import Card from "../components/card";
import Image from "next/image";
import Input from "../components/input";
import Button from "../components/button";
import Line from "../components/line";

interface Props {
    children?: ReactNode
    currentPage: string
}

export default function AuthTemplate({currentPage, children = <></>} : Props) {
    let labelColor, labelText: string = ""
    if (currentPage === "forum") {
        labelColor = "bg-lime-500"
        labelText = "FORUM"
    }
    else if (currentPage === "mapping") {
        labelColor = "bg-rose-500"
        labelText = "MAPPING"
    }
    if (currentPage === "training") {
        labelColor = "bg-yellow-500"
        labelText = "TRAINING"
    }
    return <div className="flex flex-row items-center justify-center bg-white bg-cover bg-center min-h-screen" style={{backgroundImage: 'url(background/despatcheddemons_4_salih.webp)'}}>    
        <Card bgColor={labelColor} border="border" padding="p-0">
            <Card flexDirection="flex-col">
                <Image className="bg-gray-300 rounded-md" src="/logo/despatcheddemons.png" width={300} height={300} alt="Despatched Demons Logo" />
                <b className="text-3xl text-[#f17c8e]">Despatched Demons</b>
                <Line/>
                <b className="text-xl tracking-widest">LOGIN</b>
                <Input type="text" name="username" placeholder="Username"/>
                <Input type="password" name="password" placeholder="Password"/>
                <div className="flex flex-row gap-2 w-full">
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">Remember me?</label>
                </div>
                <Button bgColor="bg-green-500" text="Login" textColor="text-white"/>
                <hr className="bg-black border-5"/>
                <Line/>
                <p>Are you new here? <a href='#' className="text-blue-500 active:text-red-500 underline">Register first</a></p>
            </Card>
            <b className="py-2 text-lg w-8 [writing-mode:vertical-lr] tracking-widest">{labelText}</b>
        </Card>
        {children}
    </div>
}