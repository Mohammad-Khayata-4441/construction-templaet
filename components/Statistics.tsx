import React, { useEffect } from "react";
import DountSvg from "../assets/svg/dount.svg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  const animate = () => {
    gsap.set(['.stats-text h2', '.stats-text p', '.count-item'],{overflow:'hidden'})
    gsap.from(['.stats-text h2', '.stats-text p', ".count-item"],{
      height:0,
      y:50,
      stagger:0.2,
      duration:0.5,
      scrollTrigger:{
          trigger:'.stats',
          toggleActions:'restart none restart'
      }
    })

 
  };

  useEffect(() => {
    animate()
  }, []);

  return (
    <div className="stats relative">
      <div className="min-h-[164px] relative bg-white shadow z-10 py-12 bg-opacity-80 backdrop-blur-sm">
        <div className="container max-w-screen-xl mx-auto justify-between items-center flex flex-col lg:flex-row ">
          <div className="stats-text text-center lg:text-right">
            <h2 className="text-4xl font-bold mb-2">جودة و وثوقية</h2>
            <p className="text-sm text-gray-600">
              إنجازات خلال أكثر من 25 سنة من الخبر بلغة الأرقام
            </p>
          </div>

          <div className="counts flex flex-col lg:flex-row-reverse gap-16 mt-16 lg:mt-0">
            <div className="count-item text-center">
              <h3
                className="text-primary font-bold text-4xl counter"
                data-value="15"
              >
                +15k
              </h3>

              <h6>شقة سكنية تم انشائها</h6>
            </div>
            <div className="count-item text-center">
              <h3
                className="text-primary font-bold text-4xl counter"
                data-value="800"
              >
                +800
              </h3>
              <h6>من العملاء الراضيين</h6>
            </div>
            <div className="count-item text-center">
              <h3
                className="text-primary font-bold text-4xl counter"
                data-value="200"
              >
                +200
              </h3>
              <h6>مشروع تم إنجازه</h6>
            </div>
          </div>
        </div>
      </div>
      <DountSvg className="bottom-0 z-0 absolute left-0 translate-y-1/2 -translate-x-1/2 "></DountSvg>
    </div>
  );
}
