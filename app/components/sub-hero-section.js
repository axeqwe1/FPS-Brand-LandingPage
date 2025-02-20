"use client";

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";


const logoList = [
    {logo:'/image/Club/AS_Monaco_Transparent.png', name:'AS MONACO',description:'Ligue 1'},
    {logo:'/image/Club/Augsburg_Transparent.png', name:'FC AUGSBURG',description:'Bundesligo'},
    {logo:'/image/Club/Bochum_Transparent.png', name:'FC HANSA ROSTOCK',description:'3. Liga'},
    {logo:'/image/Club/Hansa_Rostock_Transparent.png', name:'SS LAZIO',description:'Serie A'},
    {logo:'/image/Club/SS_Lazio_Transprent.png', name:'VFL BOCHUM',description:'Bundesligo'},
]

const SubHerosection = () => {
    const [animateX, setAnimateX] = useState(["-100%", "140%"]);

    // ตรวจจับขนาดหน้าจอและอัปเดต animateX
    useEffect(() => {
        const updateAnimation = () => {
        if (window.innerWidth < 715) {
            setAnimateX(["-100%", "50%"]); // มือถือ
        }else if(window.innerWidth > 1700){
            setAnimateX(["-100%", "140%"]); // Tablet/PC
        }
         else {
            setAnimateX(["-100%", "120%"]); // Tablet/PC
        }
        };

        updateAnimation(); // ตั้งค่าเริ่มต้น
        window.addEventListener("resize", updateAnimation); // ตรวจจับเมื่อขนาดหน้าจอเปลี่ยน

        return () => window.removeEventListener("resize", updateAnimation); // Cleanup
    }, []);
    // เรียกใช้ฟอนต์ Regular สำหรับข้อความทั่วไป
    const FuturaRegularClass = useFuturaFont('regular');
    // เรียกใช้ฟอนต์ Bold สำหรับชื่อเว็บไซต์
    const FuturaBoldClass = useFuturaFont('bold');
    // เรียกใช้ฟอนต์ Bold สำหรับชื่อเว็บไซต์
    const FuturaMediumClass = useFuturaFont('medium');
    return (
        <div className='background-theme-1 w-full overflow-hidden relative z-20'>
            <div className="min-h-[136px] w-full flex flex-nowrap items-center">
                <div className="overflow-hidden py-4 grow">
                    <motion.div
                        className="flex flex-row w-max space-x-12"
                        animate={{ x: animateX }}
                        transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                        }}
                    >
                        {[...logoList].map((logo, index) => (
                        <div key={index} className="flex flex-row">
                            <img  src={logo.logo} alt="logo" className="h-16 w-auto" />
                            <div className="px-6 flex flex-col justify-center">
                                <h5 className='text-white text-[20px] leading-[1]'>{logo.name}</h5>
                                <p className='text-white'>{logo.description}</p>
                            </div>
                        </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SubHerosection;