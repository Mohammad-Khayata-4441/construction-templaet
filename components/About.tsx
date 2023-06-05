import Image from "next/image";
import React from "react";
import { TbCoins, TbDiamond } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsCalendarDate, BsBuildingFillCheck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import AboutImage from "../assets/construction/about-2.jpg";
import AboutImage2 from "../assets/construction/header-14.jpg";
import TimeLine from "../assets/svg/timeline.svg";
import Circles from "../assets/svg/circles.svg";
import anime from "animejs";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const animateTimeLine = () => {
    const checkpoints = document.querySelectorAll(".checkpoint");
    const timelineText = document.querySelectorAll(".timeline-text");
    gsap.set("#timeLine", {
      scrollTrigger: {
        trigger: "#timeLine",
        start: "top bottom",
        onEnter: () => {
          gsap.set([checkpoints, timelineText], {
            opacity: 0,
          });
          anime({
            targets: "#timeLine .line",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 1000,
            direction: "alternate",
            loop: false,
            complete: () => {
              checkpoints.forEach((point, gi) => {
                gsap
                  .to(point, {
                    opacity: 1,
                    duration: 0.2,
                    delay: 0.35 * gi,
                  })
                  .eventCallback("onComplete", (e) => {
                    gsap.fromTo(
                      timelineText[gi],
                      {
                        opacity: 0,
                        duration: 0.01,
                        x: 25,
                      },
                      {
                        opacity: 1,
                        x: 0,
                      }
                    );
                  });
              });
            },
          });
        },
      },
    });
  };

  const animatePatterns = () => {
    gsap.set(".ptrn path", { transformOrigin: "center", rotate: 0, scale: 0 });
    gsap.to(".ptrn path", {
      scale: 1.2,

      stagger: {
        from: "end",
        amount: 0.8,
      },
      rotate: 180,
      scrollTrigger: {
        trigger: ".svg-container",
        toggleActions: "restart reset restart reverse",
      },
    });
  };

  const animateImages = () => {
    gsap.from([".about-img-1"], {
      scale: 1.5,
      scrollTrigger: {
        start: "top bottom",
        trigger: ".about-img-1",
        toggleActions: "restart none restart none",
      },
    });
    gsap.from([".about-img-2"], {
      xPercent:-100,
      opacity:0,
      scrollTrigger: {
        trigger: ".ftrs-container",
        toggleActions: "restart reset restart reverse",
      },
    });
    gsap.set(".about-img-1", {
      objectPosition: "0 50%",
    });
    gsap.to(".about-img-1", {
      objectPosition: "0 100%",
      scrollTrigger: {
        scrub: 0.05,
        start: "top bottom",
        trigger: ".about-img-1",
        toggleActions: "restart none restart none",
      },
    });
  };

  const animateFeatures = () => {
    const ftrs = document.querySelectorAll(".features li");

    ftrs.forEach((ftr,i) => {

      gsap.from(ftr, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start: "top bottom",
          trigger: ftr,
          toggleActions: "restart reverse restart reverse",
        },
      });
    });
  };

  React.useEffect(() => {
    animateTimeLine();
    animatePatterns();
    animateImages();
    animateFeatures();
  }, []);

  return (
    <div className="about">
      <div className="container max-w-screen-xl mx-auto">
        <div className="grid section-1 grid-cols-12 px-4 md:px-0">
          <div className="col-span-12 md:col-span-6 flex items-center ">
            <Image
              className="rounded-xl about-img-1 object-cover h-[450px] border-[3px] max-w-[400px] shadow-xl border-white w-[350px] xl:w-full mx-auto"
              src={AboutImage}
              height={400}
              width={500}
              alt="about"
            />
          </div>
          <div className="content col-span-12  mt-4 md:col-span-6  md:px-4 lg:px-8 ">
            <div className="about-text"  >
              <h2 className="text-2xl font-bold text-primary text-center md:text-right">
                حولنا
              </h2>

              <h4 className="text-xl md:text-2xl mt-4 text-center md:text-right">
                <span className="font-bold">العمل معنا</span> يضمن لك تحقيق جميع
                معايير السلامة والجودة
              </h4>
              <p className="mt-4 text-gray-600 text-sm text-center md:text-right">
                لتحقيق مبدأ السلامة للجميع السلامة للجميع , <br /> تلتزم شركتنا
                بمبادئ و <span className="text-primary font-bold">معايير</span>
                معينة اثناء تنفيذ المشاريع لتحقق نتائج تضمن سلامة العملاء
                والعاملين
              </p>
            </div>

            <div className="timeline mt-8 flex gap-4">
              <TimeLine id="timeLine" className="w-10"></TimeLine>
              <ul className="flex flex-col justify-between h-[375px]">
                <li className="timeline-text">
                  <h5 className="font-bold text-lg">دراسة متطلبات العميل</h5>
                  <p className="text-gray-600 text-sm md:text-base">
                    ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم وانجاز
                    المشاريع في الوقت المحدد
                  </p>
                </li>
                <li className="timeline-text">
                  <h5 className="font-bold text-lg">مناقشة الحلول الأمثل</h5>
                  <p className="text-gray-600 text-sm md:text-base">
                    ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم وانجاز
                    المشاريع في الوقت المحدد
                  </p>
                </li>
                <li className="timeline-text">
                  <h5 className="font-bold text-lg">التنفيذ و الانجاز</h5>
                  <p className="text-gray-600 text-sm md:text-base">
                    ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم وانجاز
                    المشاريع في الوقت المحدد
                  </p>
                </li>
                <li className="timeline-text">
                  <h5 className="font-bold text-lg">التسليم</h5>
                  <p className="text-gray-600 text-sm md:text-base">
                    ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم و انجاز
                    المشاريع في الوقت المحدد
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 relative ">
        <Circles className='absolute right-10 -z-10 -top-48'></Circles>
        <div className="container px-4 max-w-screen-xl mx-auto mb-4">
          <h4 className="text-xl md:text-2xl font-bold mb-2 text-center md:text-right ">
            لماذا يجب عليك <span className="text-primary">إختيارنا</span> نحن ؟
          </h4>
          <p className="text-gray-600 text-sm md:text-base text-center md:text-right">
            علاوة على الخدمات المتكاملة التي نقدمها لعملائنا فإن العمل معنا
            سيمنحك الكثير من المميزات <br /> التي ستجدها كلها في مكان واحد !
          </p>
        </div>
        <div className=" ftrs-container bg-white/80  backdrop-blur-sm z-10 relative md:h-[350px] shadow">
          <div className="container max-w-screen-xl p-4 mx-auto grid relative grid-cols-1 md:grid-cols-2 items-center h-full">
            <ul className="features grid grid-cols-2 gap-8">
              <li className="flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row ">
                <div className="border p-2 rounded-lg text-primary shadow-sm">
                  <TbCoins className="text-5xl"></TbCoins>
                </div>

                <h5 className="text-center lg:text-right text-sm lg:text-base">
                  الاستثمار الامثل للموارد
                </h5>
              </li>
              <li className="flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row ">
                <div className="border  p-2 rounded-lg text-primary shadow-sm">
                  <TbDiamond className="text-5xl"></TbDiamond>
                </div>
                <h5 className="text-center lg:text-right text-sm lg:text-base">
                  اعلى معايير الجودة
                </h5>
              </li>
              <li className="flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row ">
                <div className="border  p-2 rounded-lg text-primary shadow-sm">
                  <AiFillSafetyCertificate className="text-5xl"></AiFillSafetyCertificate>
                </div>
                <h5 className="text-center lg:text-right text-sm lg:text-base">
                  أفضل مستويات الأمان والراحة
                </h5>
              </li>
              <li className="flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row ">
                <div className="border  p-2 rounded-lg text-primary shadow-sm">
                  <BsCalendarDate className="text-5xl"></BsCalendarDate>
                </div>
                <h5 className="text-center lg:text-right text-sm lg:text-base">
                  الدقة بمواعيد التسليم
                </h5>
              </li>
              <li className="flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row ">
                <div className="border  p-2 rounded-lg text-primary shadow-sm">
                  <BiSupport className="text-5xl"></BiSupport>
                </div>
                <h5 className="text-center lg:text-right text-sm lg:text-base">
                  الدعم وخدمات مابعد التسليم
                </h5>
              </li>
              <li className="flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row ">
                <div className="border  p-2 rounded-lg text-primary shadow-sm">
                  <BsBuildingFillCheck className="text-5xl"></BsBuildingFillCheck>
                </div>
                <h5 className="text-center lg:text-right text-sm lg:text-base">
                  الخدمات المتكاملة
                </h5>
              </li>
            </ul>

            <div className="relative z-10 h-full">
              <div className="image absolute z-30  lg:-top-24 left-0">
                <Image
                  alt="about"
                  className="about-img-2 rounded-xl hidden md:block border-[3px] shadow-xl border-white w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
                  height={600}
                  width={600}
                  src={AboutImage2}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="svg-container container relative">
          <svg
            className="ptrn absolute -z-10 left-0 md:left-[200px]  lg:translate-x-2/3 -bottom-24 lg:-bottom-16 drop-shadow-md "
            width="298"
            height="226"
            viewBox="0 0 298 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2583 8.54077L8.66025 0.0407715L6.06218 8.54077L0 15.0408L8.66025 13.0408L17.3205 15.0408L11.2583 8.54077Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 8.54077L48.6603 0.0407715L46.0622 8.54077L40 15.0408L48.6603 13.0408L57.3205 15.0408L51.2583 8.54077Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 0.0407715L91.2583 8.54077L97.3205 15.0408L88.6603 13.0408L80 15.0408L86.0622 8.54077L88.6603 0.0407715Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 8.54077L128.66 0.0407715L126.062 8.54077L120 15.0408L128.66 13.0408L137.32 15.0408L131.258 8.54077Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 0.0407715L171.258 8.54077L177.32 15.0408L168.66 13.0408L160 15.0408L166.062 8.54077L168.66 0.0407715Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 8.54077L208.66 0.0407715L206.062 8.54077L200 15.0408L208.66 13.0408L217.32 15.0408L211.258 8.54077Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 0.0407715L251.258 8.54077L257.32 15.0408L248.66 13.0408L240 15.0408L246.062 8.54077L248.66 0.0407715Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 8.54077L288.66 0.0407715L286.062 8.54077L280 15.0408L288.66 13.0408L297.32 15.0408L291.258 8.54077Z"
              fill="#EA5400"
            />
            <path
              d="M8.66025 30.0408L11.2583 38.5408L17.3205 45.0408L8.66025 43.0408L0 45.0408L6.06218 38.5408L8.66025 30.0408Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 38.5408L48.6603 30.0408L46.0622 38.5408L40 45.0408L48.6603 43.0408L57.3205 45.0408L51.2583 38.5408Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 30.0408L91.2583 38.5408L97.3205 45.0408L88.6603 43.0408L80 45.0408L86.0622 38.5408L88.6603 30.0408Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 38.5408L128.66 30.0408L126.062 38.5408L120 45.0408L128.66 43.0408L137.32 45.0408L131.258 38.5408Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 30.0408L171.258 38.5408L177.32 45.0408L168.66 43.0408L160 45.0408L166.062 38.5408L168.66 30.0408Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 38.5408L208.66 30.0408L206.062 38.5408L200 45.0408L208.66 43.0408L217.32 45.0408L211.258 38.5408Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 30.0408L251.258 38.5408L257.32 45.0408L248.66 43.0408L240 45.0408L246.062 38.5408L248.66 30.0408Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 38.5408L288.66 30.0408L286.062 38.5408L280 45.0408L288.66 43.0408L297.32 45.0408L291.258 38.5408Z"
              fill="#EA5400"
            />
            <path
              d="M8.66025 60.0408L11.2583 68.5408L17.3205 75.0408L8.66025 73.0408L0 75.0408L6.06218 68.5408L8.66025 60.0408Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 68.5408L48.6603 60.0408L46.0622 68.5408L40 75.0408L48.6603 73.0408L57.3205 75.0408L51.2583 68.5408Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 60.0408L91.2583 68.5408L97.3205 75.0408L88.6603 73.0408L80 75.0408L86.0622 68.5408L88.6603 60.0408Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 68.5408L128.66 60.0408L126.062 68.5408L120 75.0408L128.66 73.0408L137.32 75.0408L131.258 68.5408Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 60.0408L171.258 68.5408L177.32 75.0408L168.66 73.0408L160 75.0408L166.062 68.5408L168.66 60.0408Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 68.5408L208.66 60.0408L206.062 68.5408L200 75.0408L208.66 73.0408L217.32 75.0408L211.258 68.5408Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 60.0408L251.258 68.5408L257.32 75.0408L248.66 73.0408L240 75.0408L246.062 68.5408L248.66 60.0408Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 68.5408L288.66 60.0408L286.062 68.5408L280 75.0408L288.66 73.0408L297.32 75.0408L291.258 68.5408Z"
              fill="#EA5400"
            />
            <path
              d="M8.66025 90.0408L11.2583 98.5408L17.3205 105.041L8.66025 103.041L0 105.041L6.06218 98.5408L8.66025 90.0408Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 98.5408L48.6603 90.0408L46.0622 98.5408L40 105.041L48.6603 103.041L57.3205 105.041L51.2583 98.5408Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 90.0408L91.2583 98.5408L97.3205 105.041L88.6603 103.041L80 105.041L86.0622 98.5408L88.6603 90.0408Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 98.5408L128.66 90.0408L126.062 98.5408L120 105.041L128.66 103.041L137.32 105.041L131.258 98.5408Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 90.0408L171.258 98.5408L177.32 105.041L168.66 103.041L160 105.041L166.062 98.5408L168.66 90.0408Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 98.5408L208.66 90.0408L206.062 98.5408L200 105.041L208.66 103.041L217.32 105.041L211.258 98.5408Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 90.0408L251.258 98.5408L257.32 105.041L248.66 103.041L240 105.041L246.062 98.5408L248.66 90.0408Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 98.5408L288.66 90.0408L286.062 98.5408L280 105.041L288.66 103.041L297.32 105.041L291.258 98.5408Z"
              fill="#EA5400"
            />
            <path
              d="M8.66025 120.041L11.2583 128.541L17.3205 135.041L8.66025 133.041L0 135.041L6.06218 128.541L8.66025 120.041Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 128.541L48.6603 120.041L46.0622 128.541L40 135.041L48.6603 133.041L57.3205 135.041L51.2583 128.541Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 120.041L91.2583 128.541L97.3205 135.041L88.6603 133.041L80 135.041L86.0622 128.541L88.6603 120.041Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 128.541L128.66 120.041L126.062 128.541L120 135.041L128.66 133.041L137.32 135.041L131.258 128.541Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 120.041L171.258 128.541L177.32 135.041L168.66 133.041L160 135.041L166.062 128.541L168.66 120.041Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 128.541L208.66 120.041L206.062 128.541L200 135.041L208.66 133.041L217.32 135.041L211.258 128.541Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 120.041L251.258 128.541L257.32 135.041L248.66 133.041L240 135.041L246.062 128.541L248.66 120.041Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 128.541L288.66 120.041L286.062 128.541L280 135.041L288.66 133.041L297.32 135.041L291.258 128.541Z"
              fill="#EA5400"
            />
            <path
              d="M8.66025 150.041L11.2583 158.541L17.3205 165.041L8.66025 163.041L0 165.041L6.06218 158.541L8.66025 150.041Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 158.541L48.6603 150.041L46.0622 158.541L40 165.041L48.6603 163.041L57.3205 165.041L51.2583 158.541Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 150.041L91.2583 158.541L97.3205 165.041L88.6603 163.041L80 165.041L86.0622 158.541L88.6603 150.041Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 158.541L128.66 150.041L126.062 158.541L120 165.041L128.66 163.041L137.32 165.041L131.258 158.541Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 150.041L171.258 158.541L177.32 165.041L168.66 163.041L160 165.041L166.062 158.541L168.66 150.041Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 158.541L208.66 150.041L206.062 158.541L200 165.041L208.66 163.041L217.32 165.041L211.258 158.541Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 150.041L251.258 158.541L257.32 165.041L248.66 163.041L240 165.041L246.062 158.541L248.66 150.041Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 158.541L288.66 150.041L286.062 158.541L280 165.041L288.66 163.041L297.32 165.041L291.258 158.541Z"
              fill="#EA5400"
            />
            <path
              d="M8.66025 180.041L11.2583 188.541L17.3205 195.041L8.66025 193.041L0 195.041L6.06218 188.541L8.66025 180.041Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 188.541L48.6603 180.041L46.0622 188.541L40 195.041L48.6603 193.041L57.3205 195.041L51.2583 188.541Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 180.041L91.2583 188.541L97.3205 195.041L88.6603 193.041L80 195.041L86.0622 188.541L88.6603 180.041Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 188.541L128.66 180.041L126.062 188.541L120 195.041L128.66 193.041L137.32 195.041L131.258 188.541Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 180.041L171.258 188.541L177.32 195.041L168.66 193.041L160 195.041L166.062 188.541L168.66 180.041Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 188.541L208.66 180.041L206.062 188.541L200 195.041L208.66 193.041L217.32 195.041L211.258 188.541Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 180.041L251.258 188.541L257.32 195.041L248.66 193.041L240 195.041L246.062 188.541L248.66 180.041Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 188.541L288.66 180.041L286.062 188.541L280 195.041L288.66 193.041L297.32 195.041L291.258 188.541Z"
              fill="#EA5400"
            />
            <path
              d="M8.66025 210.041L11.2583 218.541L17.3205 225.041L8.66025 223.041L0 225.041L6.06218 218.541L8.66025 210.041Z"
              fill="#EA5400"
            />
            <path
              d="M51.2583 218.541L48.6603 210.041L46.0622 218.541L40 225.041L48.6603 223.041L57.3205 225.041L51.2583 218.541Z"
              fill="#EA5400"
            />
            <path
              d="M88.6603 210.041L91.2583 218.541L97.3205 225.041L88.6603 223.041L80 225.041L86.0622 218.541L88.6603 210.041Z"
              fill="#EA5400"
            />
            <path
              d="M131.258 218.541L128.66 210.041L126.062 218.541L120 225.041L128.66 223.041L137.32 225.041L131.258 218.541Z"
              fill="#EA5400"
            />
            <path
              d="M168.66 210.041L171.258 218.541L177.32 225.041L168.66 223.041L160 225.041L166.062 218.541L168.66 210.041Z"
              fill="#EA5400"
            />
            <path
              d="M211.258 218.541L208.66 210.041L206.062 218.541L200 225.041L208.66 223.041L217.32 225.041L211.258 218.541Z"
              fill="#EA5400"
            />
            <path
              d="M248.66 210.041L251.258 218.541L257.32 225.041L248.66 223.041L240 225.041L246.062 218.541L248.66 210.041Z"
              fill="#EA5400"
            />
            <path
              d="M291.258 218.541L288.66 210.041L286.062 218.541L280 225.041L288.66 223.041L297.32 225.041L291.258 218.541Z"
              fill="#EA5400"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
