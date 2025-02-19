"use client";

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";


const logoList = [
    {logo:'https://futureperformancesport.my.canva.site/fps-website-approve-12-feb/_assets/media/acf3000ba92cb806359f570dea10db48.png', name:'AS MONACO',description:'Ligue 1'},
    {logo:'https://futureperformancesport.my.canva.site/fps-website-approve-12-feb/_assets/media/cf2a4879a6c8e44c13f5ab11a86b7da1.png', name:'FC AUGSBURG',description:'Bundesligo'},
    {logo:'https://futureperformancesport.my.canva.site/fps-website-approve-12-feb/_assets/media/362ec874e416f10564aa5d753d5688f5.png', name:'FC HANSA ROSTOCK',description:'3. Liga'},
    {logo:'https://futureperformancesport.my.canva.site/fps-website-approve-12-feb/_assets/media/a14e2544f9f9d5bcdad6814052c054ac.png', name:'SS LAZIO',description:'Serie A'},
    {logo:'https://futureperformancesport.my.canva.site/fps-website-approve-12-feb/_assets/media/ef14d77b4b7a4042b6d5bdd6c6adab88.png', name:'VFL BOCHUM',description:'Bundesligo'},
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