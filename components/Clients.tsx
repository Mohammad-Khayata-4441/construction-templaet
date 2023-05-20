import React from "react";
import "swiper/css";
import Aliba from "../assets/svg/Alibaba_Group-Logo.wine.svg";
import Almarai from "../assets/svg/Almarai-Logo.wine.svg";
import McKesson_Corporation from "../assets/svg/McKesson_Corporation-Logo.wine.svg";
import Oman_Air from "../assets/svg/Oman_Air-Logo.wine.svg";
import Safeway_Inc from "../assets/svg/Safeway_Inc.-Logo.wine.svg";
import Cushman_ from "../assets/svg/Cushman_&_Wakefield-Logo.wine.svg";
import Abu_Dhabi_National_Oil_Company from "../assets/svg/Just_Eat-Logo.wine.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
const clients = [
  Aliba,
  Almarai,
  McKesson_Corporation,
  Oman_Air,
  Safeway_Inc,
  Cushman_,
  Abu_Dhabi_National_Oil_Company
];
export default function Clients() {
  return (
    <div>
      <p className="text-xl text-center mb-2  font-bold ">
        استطعنا بكفائتنا كسب ثقة اهم الشركات في المنطقة
      </p>
        <Swiper
        slidesPerView={1}
        modules={[Autoplay]}

        autoplay={{
          delay:1500,
          disableOnInteraction:false,
        }}
          breakpoints={{
        
            768: {
              slidesPerView: 3,
            },
            920:{
              slidesPerView:5
            }
          }}
        >
          {clients.map((Client, i) => (
            <SwiperSlide key={i}>
              <Client className="max-w-[300px] mx-auto w-full max-h-[200px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}
