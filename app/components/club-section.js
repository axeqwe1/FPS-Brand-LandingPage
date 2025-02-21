"use client";

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState, useEffect,forwardRef } from "react";
import { useInView } from "framer-motion";



const Clubsection = forwardRef((props, ref) => {
    const isInView = useInView(ref, { triggerOnce: true, margin: "-300px" }); 
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true); // ✅ เปลี่ยนเป็น true แค่ครั้งเดียว
    }
  }, [isInView, hasBeenInView]);
    // เรียกใช้ฟอนต์ Regular สำหรับข้อความทั่วไป
    const FuturaRegularClass = useFuturaFont('regular');
    
    // เรียกใช้ฟอนต์ Bold สำหรับชื่อเว็บไซต์
    const FuturaBoldClass = useFuturaFont('bold');
    const FuturaMediumClass = useFuturaFont('medium')

    return (
        <div className="ourclub-section bg-white">
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={hasBeenInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-[1300px] mx-auto py-12 pt-[4rem]">
                <h1
                     className="lg:text-8xl text-7xl font-bold color-theme-1 tracking-tighter lg:text-start text-center"
                >
                    OUR CLUBS
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1rem] lg:gap-[4rem] mt-6 mx-3">
                    <div className="relative col-span-6 justify-items-center lg:justify-items-start">
                        <div className="relative overflow-hidden max-w-[636px] w-full h-[360px] flex items-center justify-center">
                            <video 
                                className="absolute z-10 w-auto min-w-full h-full object-cover left-0"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                alt="AS Monaco"
                                preload='none'
                            >
                                <source src="/image/Video/As_Monaco.webm" type="video/webm" />
                            </video>
                        </div>
                        <div className="mt-4 flex flex-row justify-items-center lg:justify-items-start">
                            <Image
                                src="/image/Club/AS_Monaco_Transparent.webp" 
                                width={55}
                                height={60}
                                alt="Mizuno"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <div className='flex flex-col items-start justify-center pl-6'>
                                <h1 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">AS MONACO</h1>
                                <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">France</h6>
                                <p className="text-gray-500">Ligue 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:mt-[-110px] col-span-6 justify-items-center lg:justify-items-start">
                        <div className="relative overflow-hidden max-w-[580px] w-full h-[410px] flex items-center justify-center">
                            <video 
                                className="absolute z-10 w-auto min-w-full h-full object-cover left-0"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                alt="FC Augsburg"
                                preload='none'
                            >
                                <source src="/image/Video/FC_Augsburg.webm" type="video/webm" />
                            </video>
                        </div>
                        <div className="mt-4 flex flex-row justify-items-center lg:justify-items-start">
                            <Image
                                src="/image/Club/Augsburg_Transparent.webp" 
                                width={60}
                                height={90}
                                alt="Mizuno"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <div className='flex flex-col items-start justify-center pl-6'>
                                <h1 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">FC AUGSBURG</h1>
                                <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Germany</h6>
                                <p className="text-gray-500">Bundesliga</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12  gap-[1rem] lg:gap-[4rem] mt-6 mx-3 ">
                    <div className="relative z-0 col-span-7 lg:col-span-5 justify-items-center lg:justify-items-start">
                        <div className="relative overflow-hidden max-w-[600px]  w-full h-[460px] flex items-center justify-center">
                            <video 
                                className="absolute z-10 w-auto min-w-full h-full min-h-[560px] object-cover left-0"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                preload='none'
                            >
                                <source src="/image/Video/Hansa.webm" type="video/webm" />
                            </video>
                        </div>
                        <div className="mt-4 flex flex-row justify-items-center lg:justify-items-start">
                            <Image
                                src="/image/Club/Hansa_Rostock_Transparent.webp" 
                                width={80}
                                height={80}
                                alt="Mizuno"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <div className='flex flex-col items-start justify-center pl-6'>
                                <h1 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">FC HANSA ROSTOCK</h1>
                                <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Germany</h6>
                                <p className="text-gray-500">3. Liga</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:mt-[-40px] col-span-7 justify-items-center lg:justify-items-start">
                        <div className="relative overflow-hidden max-w-[680px] w-full h-[360px] flex items-center justify-center">
                            <video 
                                className="absolute z-10 w-auto min-w-full h-full  object-cover left-0"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                alt="SS Lazio"
                            >
                                <source src="/image/Video/SS_Lazio.webm" type="video/webm" />
                            </video>
                        </div>
                        <div className="mt-4 flex flex-row justify-items-center lg:justify-items-start">
                            <Image
                                src="/image/Club/SS_Lazio_Transprent.webp" 
                                width={110}
                                height={90}
                                alt="Mizuno"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                                preload='none'
                            />
                            <div className='flex flex-col items-start justify-center pl-1'>
                                <h1 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">SS LAZIO</h1>
                                <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Italy</h6>
                                <p className="text-gray-500">Serie A</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-[1rem] xl:gap-[7rem] mt-3 mx-3">
                    {/* FC AUGSBURG IMAGE (Move this up in small screens) */}
                    <div className="relative lg:order-last order-none lg:mt-[-110px] col-span-7 lg:mx-6 justify-items-center lg:justify-items-start">
                        <div className="relative overflow-hidden max-w-[650px] w-full h-[370px] flex items-center justify-center">
                            <video 
                                className="absolute z-10 w-auto min-w-full h-full  object-cover left-0"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                alt="VFL Bochum"
                                preload='none'
                            >
                                <source src="/image/Video/VFL_Bochum.webm" type="video/webm" />
                            </video>
                        </div>
                        <div className="mt-4 flex flex-row text-center lg:text-left">
                            <Image
                                src="/image/Club/Bochum_Transparent.webp" 
                                width={75}
                                height={80}
                                alt="Mizuno"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <div className='flex flex-col items-start justify-center pl-6'>
                                <h1 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">VFL BOCHUM</h1>
                                <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Germany</h6>
                                <p className="text-gray-500">Bundesliga</p>
                            </div>
                        </div>
                    </div>

                    {/* LOGO MIZUNO (Move this down in small screens) */}
                    <div className="relative lg:order-first order-none lg:mt-[-25px] z-0 col-span-7 lg:col-span-5 justify-items-center lg:justify-items-start">
                        <div className="max-w-[500px] w-full h-[340px] flex items-center justify-center">
                            <Image
                                src="/image/Logos/Mizuno-logo-wordmark.webp" 
                                width={320}
                                height={360}
                                alt="Mizuno"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
})
   export default Clubsection;