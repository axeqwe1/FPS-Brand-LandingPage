'use client'

import { useFuturaFont } from "@/app/utils/FuturaFont.js";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "CLUB PARTNERS", id: "club" },
  { name: "ABOUT US", id: "about" },
  { name: "CONTACT US", id: "contact" },
  { name: "B2B", path: "https://b2b.ymtinnovation.com/" }, // ใช้ path แทน id สำหรับลิงก์ไปหน้าใหม่
];

const NavBar = ({ scrollToSection }) => {
  const FuturaRegularClass = useFuturaFont("regular");
  const FuturaBoldClass = useFuturaFont("bold");

  return (
    <div className="navbar shadow-lg sticky top-0 z-50 p-0 bg-white">
      <div className="container max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center w-full">
          <a href="#">
            <Image
              src="/image/Logos/FPS-PNG_Blue_09050de_Transparent.png"
              width={120}
              height={53}
              alt="Future"
              style={{ objectFit: "contain" }} // ป้องกันการยืด
            />
          </a>
          <div className="flex flex-row h-full justify-center items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"  // กำหนดสีเส้นเป็นสีดำ
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow ml-[-160px]"
              >
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.path ? (
                      <a target="_blank" href={item.path} className={`cursor-pointer px-3 py-5 lg:mr-5 mr-3 ml-2 text-[18px] font-normal league-spartan-font-800 tracking-wide color-theme-1 underline-animation`}>
                        {item.name}
                      </a>
                    ) : (
                      <a
                        href={`#${item.id}`}
                        onClick={() => scrollToSection(item.id)}
                        className={`cursor-pointer px-3 py-5 lg:mr-5 mr-3 ml-2 text-[18px] font-normal league-spartan-font-800 tracking-wide color-theme-1 underline-animation`}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="lg:flex flex-row hidden">
              {menuItems.map((item, index) => (
                <li key={index}>
                    {item.path ? (
                    <a target="_blank" href={item.path} className={`cursor-pointer px-3 py-5 lg:mr-5 mr-3 ml-2 text-[18px] font-normal league-spartan-font-800 tracking-wide color-theme-1 underline-animation`}>
                        {item.name}
                    </a>
                    ) : (
                    <a href={`#${item.id}`} onClick={() => scrollToSection(item.id)} className={`cursor-pointer px-3 py-5 lg:mr-5 mr-3 ml-2 text-[18px] font-normal league-spartan-font-800 tracking-wide color-theme-1 underline-animation`}>
                        {item.name}
                    </a>
                    )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
