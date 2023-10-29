"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "./ui/button";
import {
  PiArrowLeft as PrevIcon,
  PiArrowRight as NextIcon,
} from "react-icons/pi";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="relative h-full">
      <Swiper
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        modules={[Navigation]}
        noSwiping={true}
        className="h-full overflow-hidden rounded-lg"
      >
        <SwiperSlide className="relative">
          <Image
            src={
              "https://upcdn.io/FW25bBB/image/content/app_screens/da9aeaca-427a-4c27-a44b-4f42969fc550.png"
            }
            alt="slide-image"
            fill
            // className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Button
        size={"icon"}
        className="absolute inset-y-0 left-0 z-10 my-auto -ml-4 arrow-left disabled:hidden"
      >
        <PrevIcon className="w-5 h-5" />
      </Button>
      <Button
        size={"icon"}
        className="absolute inset-y-0 right-0 z-10 my-auto -mr-4 arrow-right disabled:hidden"
      >
        <NextIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Slider;
