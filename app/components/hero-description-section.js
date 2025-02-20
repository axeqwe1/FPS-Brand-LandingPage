"use client";

import Link from 'next/link';
import Image from "next/image";
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import { motion, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
const HeroDescriptionSection = () => {
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
        <div className="description-section bg-white">
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={hasBeenInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // เช็คว่าอยู่ใน viewport หรือไม่
                transition={{duration: 0.3, ease: "easeOut" }}
                className="container min-h-[800px] max-w-[1250px] mx-auto pt-14 pb-6"
            >
                <div className="flex lg:flex-row-reverse lg:justify-between xl:ml-[0px] lg:ml-[46px]  md:mr-[46px] m-[0] justify-center items-center flex-col-reverse">
                    <div className="mt-6">
                        <h1 className='uppercase text-[38px] md:text-[52px] leading-[1] color-theme-1 text-center lg:text-right league-spartan-font-800 tracking-tighter px-3'>
                            YMT HOLDING.<br/>
                            A Vertically integrated textile group.
                        </h1>
                    </div>
                    <div className="">
                        <Image 
                            src="/image/Logos/YMTHoldingBlue.webp" 
                            width={95}
                            height={90}
                            alt="Future"
                            style={{ objectFit: "contain" }} // ป้องกันการยืด
                        />
                    </div>
                </div>
                <div className={`color-theme-1 ${FuturaRegularClass} text-[18px] mt-2 md:mt-16 max-w-[880px] mx-auto lg:p-0 p-6`}>
                    <p>
                        Established in 1988, YMT Holding is a globally recognized, vertically integrated textile and apparel group with
                        over 35 years of expertise. We specialize in high-performance athleisure and athletic apparel, partnering with
                        leading sports brands to deliver cutting-edge products that meet the highest industry standards.
                    </p>
                    <br />
                    <p>
                        At the foundation of our supply chain, Textile One Indonesia (TOI) drives fabric innovation, producing high-quality
                        polyester and blended textiles. In garment manufacturing, Yeh Pattana Tayeh (YPT) in Thailand and Gennex
                        Apparel in Vietnam push the boundaries, utilizing seamless construction, laser-cutting, and hybrid production
                        systems to create performance-driven sportswear. On the consumer-facing side, Future Performance Sport (FPS)
                        delivers bespoke merchandising solutions for top clubs, while Noble Distribution Service (NDS) optimizes retail
                        and distribution, reducing lead times and costs for global brands.
                    </p>
                    <br />
                    <p>
                        Our commitment to sustainability and innovation is strengthened by partnerships with NTX in Taiwan and DyeCoo
                        Textile in the Netherlands, pioneering pre-treatment, coloration, and waterless dyeing technologies. Through this
                        fully integrated ecosystem, we set new benchmarks in performance, efficiency, and responsible manufacturing.
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap">
                        <Image
                            className='mx-3 mr-[-12px]'  
                            src="/image/Logos/Textile_one.webp" 
                            width={210}
                            height={90}
                            alt="Textile One Indonesia"
                            style={{ objectFit: "contain" }} // ป้องกันการยืด
                        />
                        <Image 
                            className='mx-3'  
                            src="/image/Logos/YPTLogo_Square.webp" 
                            width={197}
                            height={90}
                            alt="Yehpattana Tayeh"
                            style={{ objectFit: "contain" }} // ป้องกันการยืด
                        />
                        <Image 
                            className='md:mx-9 mx-3'  
                            src="/image/Logos/Gennex_Square.webp" 
                            width={190}
                            height={90}
                            alt="Gennex"
                            style={{ objectFit: "contain" }} // ป้องกันการยืด
                        />
                        <Image 
                            className='mx-3'  
                            src="/image/Logos/FPS-PNG_Blue_09050de_Transparent.svg" 
                            width={200}
                            height={90}
                            alt="Future Performance Sport Co., LTD"
                            style={{ objectFit: "contain" }} // ป้องกันการยืด
                        />
                        <Image 
                            className='ml-[-15px]' 
                            src="/image/Logos/NDS_Logo.jpeg" 
                            width={205}
                            height={90}
                            alt="NDS"
                            style={{ objectFit: "contain" }} // ป้องกันการยืด
                        />
                </div>
            </motion.div>
        </div>

    )
}

export default HeroDescriptionSection