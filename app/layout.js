import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/fonts/FuturaBold.woff2' })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>FPS Future Performace Sport Co., LTD.</title>
        <link rel="icon" href="/image/Logos/FPS-PNG_Blue_09050de_Transparent.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

