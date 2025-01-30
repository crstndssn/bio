"use client"

import Image from "next/image";
import { useState } from 'react';

import Nav from '../components/navigation';


// components/MySwiper.js
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#000000] min-h-screen">
      <p className="">crstndssn</p>
      <p className="">test</p>
    </div>
  );
}
