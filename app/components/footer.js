"use client";

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { forwardRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
const Footer = forwardRef((props,ref) => {
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
        <div className='background-theme-1 text-white'>
            <footer
                className="max-w-7xl mx-auto "
            >
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // เช็คว่าอยู่ใน viewport หรือไม่
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                        <div className="p-3 w-full h-full place-self-end">
                            <div className={`flex flex-col h-full justify-between `}>
                                <h1 className="lg:text-[82px] text-[72px] leading-[0.85] w-[100px] mt-[35px] tracking-[-.1em]">CONTACT US</h1>
                                <div className="lg:mb-[55px] mb-[0px] lg:mt-[0px] mt-[55px] ">
                                    <div className="mb-[20px]">
                                        <h1 className={`${FuturaMediumClass} text-[22px]`}>CLUB & BUSINESS ENQUIRIES</h1>
                                        <p className={`${FuturaRegularClass} text-[20px]`}>fps@futureperformancesport.com</p>
                                    </div>
                                    <div className="">
                                        <h1 className={`${FuturaMediumClass} text-[22px]`}>CAREERS</h1>
                                        <p className={`${FuturaRegularClass} text-[20px]`}>hr@ymtholding.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mx-auto w-full h-full place-self-start lg:p-0 p-5">
                            <div className="flex justify-center items-center h-full w-full p-[24px]">
                                <div className="max-w-[600px] min-w-[340px] sm:min-w-[440px] max-h-[490px] h-full">
                                    <div className="h-full grid grid-flow-row-dense grid-cols-[repeat(3,1fr)_10px__10px_repeat(3,1fr)_10px__10px_repeat(2,1fr)] grid-rows-[repeat(1,1fr)_10px_10px_repeat(1,1fr)]">
                                        <div className="relative bg-red-500 col-span-3 row-span-3 overflow-hidden flex justify-center items-center border-solid border-2 border-white">
                                            <Image
                                                src="/image/image/Augsburg/Augsburg_Club_Page.png"
                                                alt="Mizuno"
                                                fill
                                                style={{ objectFit: "cover" }} // ป้องกันการยืด
                                            />
                                        </div>
                                        <div className="bg-blue-500 col-span-5 overflow-hidden flex justify-center items-center border-solid border-2 border-white">
                                            <Image
                                                src="/image/image/SS_Lazio/lazio-6-min.jpg"
                                                width={420}
                                                height={330}
                                                alt="Mizuno"
                                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                                            />
                                        </div>
                                        <div className="relative bg-blue-500 col-span-4 overflow-hidden flex justify-center items-center border-solid border-2 border-white">
                                            <Image
                                                className='absolute top-0 left-0 min-h-[235px] object-cover'
                                                src="/image/image/AS_Monaco/AS_Monaco_Kap_a_Club_Page.jpg"
                                                width={420}
                                                height={330}
                                                alt="Mizuno"
                                            />
                                        </div>
                                        <div className="relative overflow-hidden bg-red-500 col-start-1 col-span-7 row-span-1 flex justify-center items-center border-solid border-2 border-white">
                                            <Image
                                                className='absolute top-0 left-0 min-h-[235px] object-cover'
                                                src="/image/image/Hansa_Rostock/Hansa_1.jpg"
                                                fill
                                                alt="Mizuno"
                                            />
                                        </div>
                                        <div className="relative overflow-hidden bg-red-500  col-span-5 row-span-3 flex justify-center items-center border-solid border-2 border-white">
                                            <Image
                                                className='absolute top-0 left-0 min-h-[275px] object-cover'
                                                src="/image/image/Bochum/bochum.jpeg"
                                                width={420}
                                                height={330}
                                                alt="Mizuno"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </footer>
        </div>
    )
})

export default Footer;