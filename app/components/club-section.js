"use client";

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import Image from "next/image";
import { motion } from "framer-motion";

  // เรียกใช้ฟอนต์ Regular สำหรับข้อความทั่วไป
  const FuturaRegularClass = useFuturaFont('regular');
  
  // เรียกใช้ฟอนต์ Bold สำหรับชื่อเว็บไซต์
  const FuturaBoldClass = useFuturaFont('bold');
  const FuturaMediumClass = useFuturaFont('medium')

const Clubsection = () => {
    return (
            <div className="max-w-[1300px] mx-auto my-12">
                <motion.h1
                 className="lg:text-8xl text-7xl font-bold color-theme-1 tracking-tighter lg:text-start text-center"
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    OUR CLUBS
                </motion.h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1rem] lg:gap-[4rem] mt-6 mx-3">
                    <div className="relative col-span-6 justify-items-center lg:justify-items-start">
                        <div className="relative overflow-hidden max-w-[636px] w-full h-[360px] flex items-center justify-center">
                            <video 
                                className="absolute z-10 w-auto min-w-full h-full object-cover left-0"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="/image/Video/AS_Monaco_for_FPS_Website.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="mt-4 justify-items-center lg:justify-items-start">
                            <h2 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">AS MONACO</h2>
                            <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">France</h6>
                            <p className="text-gray-500">Ligue 1</p>
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
                            >
                                <source src="/image/Video/FC_Augsburg_for_Website.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="mt-4 justify-items-center lg:justify-items-start">
                            <h2 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">FC AUGSBURG</h2>
                            <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Germany</h6>
                            <p className="text-gray-500">Bundesliga</p>
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
                            >
                                <source src="/image/Video/Hansa_for_FPS_Website.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="mt-4 justify-items-center lg:justify-items-start">
                            <h2 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">FC HANSA ROSTOCK</h2>
                            <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Germany</h6>
                            <p className="text-gray-500">3. Liga</p>
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
                            >
                                <source src="/image/Video/SS_Lazio_for_FPS_Website.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="mt-4 justify-items-center lg:justify-items-start">
                            <h2 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">SS LAZIO</h2>
                            <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Italy</h6>
                            <p className="text-gray-500">Serie A</p>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-[1rem] xl:gap-[7rem] mt-12 mx-3">
                    {/* FC AUGSBURG IMAGE (Move this up in small screens) */}
                    <div className="relative lg:order-last order-none lg:mt-[-125px] col-span-7 lg:mx-6 justify-items-center lg:justify-items-start">
                        <div className="relative overflow-hidden max-w-[650px] w-full h-[370px] flex items-center justify-center">
                            <video 
                                className="absolute z-10 w-auto min-w-full h-full  object-cover left-0"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="/image/Video/VfL_Bochum_for_FPS_Website.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="mt-4 text-center lg:text-left">
                            <h2 className="text-[24px] leading-[1] font-bold color-theme-1 tracking-tight">VFL BOCHUM</h2>
                            <h6 className="text-[20px] leading-[1] color-theme-1 tracking-tight">Germany</h6>
                            <p className="text-gray-500">Bundesliga</p>
                        </div>
                    </div>

                    {/* LOGO MIZUNO (Move this down in small screens) */}
                    <div className="relative lg:order-first order-none lg:mt-[-25px] z-0 col-span-7 lg:col-span-5 justify-items-center lg:justify-items-start">
                        <div className="max-w-[500px] w-full h-[340px] flex items-center justify-center">
                            <Image
                                src="/image/Logos/Mizuno-logo-wordmark.png" 
                                width={320}
                                height={360}
                                alt="Mizuno"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                        </div>
                    </div>
                </div>
            </div>

            // <div className="max-w-[1300px] mx-auto my-12">
            //     <div className="grid md:grid-cols-2 gap-8">
            //         <div className="grid grid-rows-[120px_repeat(2,0fr)_340px]">
            //             <h1 className="text-8xl font-bold text-blue-900">OUR CLUBS</h1>
            //             <div className="m-3">
            //                 <div className="max-w-[630px] w-full h-[360px] border-2 border-gray-400 flex items-center justify-center">
            //                     <span className="text-gray-500">AS MONACO IMAGE</span>
            //                 </div>
            //                 <div className="mt-4">
            //                     <h2 className="text-xl font-bold text-blue-800">AS MONACO</h2>
            //                     <p className="text-gray-600">France</p>
            //                     <p className="text-gray-500">Ligue 1</p>
            //                 </div>
            //             </div>
            //             <div className='m-3'>
            //                 <div className="max-w-[535px] w-full h-[450px] border-2 border-gray-400 flex items-center justify-center">
            //                     <span className="text-gray-500">FC HANSA Rostock</span>
            //                 </div>
            //                 <div className="mt-4">
            //                     <h2 className="text-xl font-bold text-blue-800">FC HANSA Rostock</h2>
            //                     <p className="text-gray-600">Germany</p>
            //                     <p className="text-gray-500">3. Liga</p>
            //                 </div>
            //             </div>
            //             <div className="m-3">
            //                 <div className="sm:max-w-[500px] max-w-[500px] w-full h-full border-2 border-gray-400 flex items-center justify-center">
            //                     <span className="text-gray-500">LOGO MIZUNO</span>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="grid grid-rows-[repeat(3,0fr)]">
            //             <div className="m-3 mb-6">
            //                 <div className="max-w-[530px] w-full h-[410px] border-2 border-gray-400 flex items-center justify-center">
            //                     <span className="text-gray-500">FC AUGSBURG IMAGE</span>
            //                 </div>
            //                 <div className="mt-4">
            //                     <h2 className="text-xl font-bold text-blue-800">FC AUGSBURG</h2>
            //                     <p className="text-gray-600">Germany</p>
            //                     <p className="text-gray-500">Bundesliga</p>
            //                 </div>
            //             </div>
            //             <div className="m-3">
            //                 <div className="max-w-[675px] w-full h-[360px] border-2 border-gray-400 flex items-center justify-center">
            //                     <span className="text-gray-500">SS LAZIO</span>
            //                 </div>
            //                 <div className="mt-4 mb-10">
            //                     <h2 className="text-xl font-bold text-blue-800">SS LAZIO</h2>
            //                     <p className="text-gray-600">Italy</p>
            //                     <p className="text-gray-500">Serie A</p>
            //                 </div>
            //             </div>
            //             <div className="m-3">
            //                 <div className="max-w-[675px] w-[675px] h-[360px] border-2 border-gray-400 flex items-center justify-center">
            //                     <span className="text-gray-500">vFL Bochum</span>
            //                 </div>
            //                 <div className="mt-4">
            //                     <h2 className="text-xl font-bold text-blue-800">vFL Bochum</h2>
            //                     <p className="text-gray-600">Germany</p>
            //                     <p className="text-gray-500">Bundesliga</p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
    )
}

export default Clubsection;