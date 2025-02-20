"use client";

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const HeroDetailsection = () => {
  const ref = useRef(null);
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
// เรียกใช้ฟอนต์ Bold สำหรับชื่อเว็บไซต์
  const FuturaMediumClass = useFuturaFont('medium');
    return (
        <div className='min-h-[600px] background-theme-1'>
            <motion.div 
                ref={ref}
                className="container max-w-[1250px] mx-auto h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // เช็คว่าอยู่ใน viewport หรือไม่
                transition={{duration: 0.3, ease: "easeOut" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 py-12 mb-12">
                    <div className="col-span-1 md:pb-0 pb-3">
                        <div className="flex flex-col items-center md:items-start leading-[.9] tracking-[-.2em]">
                            <div className="content">
                                <h1 className={`text-[44px] sm:text-[54px] text-white uppercase text-center md:text-start`}>
                                    Pioneering <br />
                                    the future <br />
                                    of football <br />
                                    merchandising.
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 ">
                        <div className="flex flex-col w-full h-full items-center px-12">
                            <div className="content max-w-[440px]">
                                <p className={`${FuturaRegularClass} text-white text-[18px] `}>
                                    As a subsidiary of YMT Holding, Future Performance
                                    Sport leverages decades of technical expertise and
                                    cutting-edge technologies in textile innovation and smart
                                    manufacturing to create bespoke football merchandise. 
                                </p>
                                <br />
                                <p className={`${FuturaRegularClass} text-white text-[18px]`}>
                                    From advanced fabrics to automated production, we
                                    deliver next-generation solutions that set new standards
                                    in performance and design. We push the boundaries of
                                    football merchandising—delivering custom solutions with
                                    precision, efficiency, and future-focused innovation.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[180px]">
                    <div className="col-span-1">
                        <div className="flex flex-col-reverse md:justify-between justify-center h-full">
                            <div className='flex flex-row items-center justify-center md:justify-start pb-6'>
                                <Image 
                                    src="/image/Logos/YMT_Holding_White.webp" 
                                    width={82}
                                    height={80}
                                    alt="YMT Holding"
                                />
                                <div className="text-white px-6">
                                    <h3 className={`text-[20px] ${FuturaBoldClass}`}>YMT HOLDING</h3>
                                    <p className={`leading-[1.75] ${FuturaRegularClass}`}>Parent Company of Future Performance Sport</p>
                                    <p className={`${FuturaRegularClass}`}>www.ymtholding.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col-reverse md:justify-between justify-center h-full ">
                            <div className='flex flex-row-reverse items-center justify-center md:justify-start  mb-6 md:mr-12'>
                                <Image 
                                    src="/image/Logos/FPS-PNG.webp" 
                                    width={175}
                                    height={83}
                                    alt="Future"
                                />
                                <span className='p-3'></span>
                                <Image 
                                    src="/image/Logos/Mizuno_Runbird_Only_White_Transparent.webp" 
                                    width={127}
                                    height={83}
                                    alt="Mizuno"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroDetailsection;