// app/utils/FuturaFont.js
import localFont from "next/font/local";

// กำหนดฟอนต์ FuturaBold และ FuturaRegular
const futuraBold = localFont({
  src: '../../public/fonts/FuturaStdBold.woff',  // เส้นทางไปยังฟอนต์ Bold
  display: 'swap',  // ให้ฟอนต์โหลดได้เร็วขึ้น
  weight: '900',  // กำหนดน้ำหนักฟอนต์เป็น Bold
});

const futuraRegular = localFont({
  src: '../../public/fonts/FuturaStdBook.woff',  // เส้นทางไปยังฟอนต์ Regular
  display: 'swap',  // ให้ฟอนต์โหลดได้เร็วขึ้น
  
});
const futuraMedium = localFont ({
  src: '../../public/fonts/FuturaStdHeavy.woff',
  display:'swap',
  weight:'400',
})
// ฟังก์ชันเพื่อเลือกฟอนต์ตามที่ต้องการ
export function useFuturaFont(weight = 'regular') {
  if (weight === 'bold') {
    return futuraBold.className;  // คืนค่าคลาสสำหรับ Bold
  }
  if(weight === 'medium'){
    return futuraMedium.className;  // คืนค่าคลาสสำหรับ Medium
  }
  return futuraRegular.className;  // คืนค่าคลาสสำหรับ Regular
}
