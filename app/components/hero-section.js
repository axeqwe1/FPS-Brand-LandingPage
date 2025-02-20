"use client";

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import Image from "next/image";
import { motion } from "framer-motion";
const Herosection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.2, // แต่ละอันจะแสดงผลช้าไป 0.3 วินาที
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };

  // เรียกใช้ฟอนต์ Regular สำหรับข้อความทั่วไป
  const FuturaRegularClass = useFuturaFont('regular');
  
  // เรียกใช้ฟอนต์ Bold สำหรับชื่อเว็บไซต์
  const FuturaBoldClass = useFuturaFont('bold');
  const FuturaMediumClass = useFuturaFont('medium')
    return(
        <div className='relative max-h-[650px] min-h-[600px] bg-black bg-opacity-75 w-full overflow-hidden'>
            <video 
                className="absolute z-10 w-auto min-w-full min-h-[900px] object-cover top-[-100px] left-0"
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src="/image/Video/herosectionVideo.webm" type="video/webm" />
            </video>
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center sm:items-start py-9">
                    <div className="relative z-10 flex flex-col text-white max-w-[485px] xl:px-0 px-9">
                        <div className="flex justify-center items-center">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                            <motion.h1 variants={itemVariants} className={`lg:text-[62px] sm:text-[48px] text-[38px] leading-[1.1] tracking-tighter ${FuturaBoldClass}`}>EMPOWERING<br/> CLUBS WITH <br/>TOTAL<br/> MERCHANDISING SOLUTIONS</motion.h1>
                            <motion.p variants={itemVariants} className={`py-3 sm:text-[21px] text-[18px] tracking-tight leading-6 ${FuturaRegularClass}`}>We deliver bespoke football products. <br/> From design to retail, with future - focused <br/> innovation and technical expertise</motion.p>
                            <br className='hidden lg:block' />
                                <motion.div variants={itemVariants} className="logo sm:py-0 py-6">
                                    <Image 
                                        className={`ml-4 mr-1 lg:w-[137px] lg:h-[83px] w-[127px] h-[73px]`}
                                        src="/image/Logos/Mizuno_Runbird_Only_White_Transparent.png" 
                                        width={137}
                                        height={83}
                                        alt="Mizuno"
                                        style={{ objectFit: "contain" }} // ป้องกันการยืด
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse lg:justify-start justify-end mt-3 items-center sm:items-start">
                        <div className="flex sm:flex-row-reverse flex-row flex-wrap content-start z-10 lg:px-0 sm:p-0 p-[3px]  items-center">
                            <Image
                                className={`sm:ml-4 ml-2 mr-1 lg:w-[56px] lg:h-[58px] w-[46px] h-[48px]`} 
                                src="/image/Club/Bochum_Transparent.webp" 
                                width={56}
                                height={58}
                                alt="Bochum"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <Image 
                                className={`sm:ml-4 ml-2 lg:w-[88px] lg:h-[59px] w-[78px] h-[49px]`} 
                                src="/image/Club/SS_Lazio_Transprent.webp" 
                                width={88}
                                height={59}
                                alt="SS Lazio"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <Image 
                                className={`sm:ml-8 ml-0 lg:w-[58px] lg:h-[58px] w-[48px] h-[48px]`}
                                src="/image/Club/Hansa_Rostock_Transparent.webp" 
                                width={58}
                                height={58}
                                alt="Hansa Rostock"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <Image 
                                className={`sm:ml-8 ml-6 lg:w-[46px] lg:h-[58px] w-[36px] h-[48px]`}
                                src="/image/Club/Augsburg_Transparent.webp" 
                                width={46}
                                height={58}
                                alt="Augsburg"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                            <Image 
                                className={`sm:ml-4 ml-6 mt-[-10px] lg:w-[43px] lg:h-[71px] w-[43px] h-[61px]`}
                                src="/image/Club/AS_Monaco_Transparent.webp" 
                                width={43}
                                height={71}
                                alt="AS Monaco"
                                style={{ objectFit: "contain" }} // ป้องกันการยืด
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection;