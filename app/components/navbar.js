'use client'

import Link from 'next/link';
import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import Image from "next/image";

const menuItems = [
  { name: "CLUB PARTNERS", path: "/club" },
  { name: "ABOUT US", path: "/about" },
  { name: "CONTACT US", path: "/contact" },
  { name: "B2B", path: "/b2b" },
]


const NavBar = () => {
      // เรียกใช้ฟอนต์ Regular สำหรับข้อความทั่วไป
  const FuturaRegularClass = useFuturaFont('regular');
  
  // เรียกใช้ฟอนต์ Bold สำหรับชื่อเว็บไซต์
  const FuturaBoldClass = useFuturaFont('bold');
    return(
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 p-0">
            <div className="container max-w-[1300px] mx-auto">
                <div className="flex justify-between items-center w-full">
                    <a href="">
                        <Image 
                            src="/image/Logos/FPS-PNG_Blue_09050de_Transparent.png" 
                            width={120}
                            height={53}
                            alt="Future"
                            style={{ objectFit: "contain" }} // ป้องกันการยืด
                        />
                    </a>
                    <div className='flex flex-row h-full justify-center items-center'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ml-[-160px]">
                                {menuItems.map((item,index) => (
                                    <li key={index}>
                                        <Link href={item.path} className={`px-3 py-4 lg:mr-5 mr-3 ml-2 text-[18px] font-normal league-spartan-font-800 tracking-wide color-theme-1 underline-animation`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ul className='md:flex flex-row hidden'>
                        {menuItems.map((item,index) => (
                            <li key={index}>
                                <Link href={item.path} className={`px-3 mr-5 ml-2 rounded-box p-6 text-[18px] font-normal league-spartan-font-800 tracking-wide color-theme-1 underline-animation`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;