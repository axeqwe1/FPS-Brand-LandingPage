import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/fonts/FuturaBold.woff2' })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Discover premium football jerseys from FPS - Future Performance Sport. Official kits for AS Monaco, FC Augsburg, SS Lazio, FC Hansa Rostock, and VFL Bochum, designed with cutting-edge sportswear technology."></meta>
        <title>FPS Future Performace Sport Co., LTD.</title>
        <link rel="icon" href="/image/Logos/FPS-PNG_Blue_09050de_Transparent.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/image/Club/Bochum_Transparent.webp" as="image"/>
        <link rel="preload" href="/image/Club/SS_Lazio_Transprent.webp" as="image"/>
        <link rel="preload" href="/image/Club/Hansa_Rostock_Transparent.webp" as="image"/>
        <link rel="preload" href="/image/Club/Augsburg_Transparent.webp" as="image"/>
        <link rel="preload" href="/image/Club/AS_Monaco_Transparent.webp" as="image"/>
        <link rel="preload" href="/image/Video/herosectionVideo.webm" as="video" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;300;400;500;700;800;900&display=swap" as="style"/>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

