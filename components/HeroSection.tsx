import Net from "../assets/svg/net.svg";
import Dots from "../assets/svg/dots.svg";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import heroImage from "@/assets/construction/tower-4.jpg";
import heroImage2 from "@/assets/construction/tower-3.jpg";
import heroMobile from "@/assets/construction/header-13.jpg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap, { Back, Power2 } from "gsap";
import { GradiantBtn, OutlinedBtn } from "./styled/Btn";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = styled.div`
  background: linear-gradient(128.12deg, #1e1c2a 11.92%, #0d0c13 71.99%);
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
`;

export default function HeroSection() {
  const animate = () => {

    if (typeof window !== undefined) {
      gsap.from(["header li a", "header .brand"], {
        opacity: 0,
        duration: 0.5,
      });

      gsap.fromTo(
        ".net",
        {
          scale: 0.5,
          ease: "back.out(1.5)",
          duration: 5,
          repeat:-1,
          yoyo: true,
        },
        {
          scale: 1,
          ease: "back.out(1.5)",
          repeat:-1,
          duration: 5,
          yoyo: true,
        }
      );
      gsap.from(".img-1", {
        y: -300,
        duration: 1.5,
        ease: Power2.easeOut,
        opacity:0,
        
        scrollTrigger: {
          trigger: ".hero",
          toggleActions:"restart none restart none"
        },
      });
      gsap.from(".img-2", {
        y: 300,
        duration: 1.5,
        opacity:0,
        ease: Power2.easeOut,
        scrollTrigger: {
          trigger: ".hero",
          toggleActions:"restart none restart none"

        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          toggleActions:"restart none restart none"
        },
      });

      tl.from([".hero-text h3"], {
        x: window.innerWidth,
        duration: 1,
        stagger: 0.5,
        ease: Power2.easeOut,
      })
        .from(".hero-text p", {
          y: -50,
          duration: 0.5,
          opacity: 0,
        })
        .from(".hero-btns button", {
          y: 100,
          opacity: 0,
          duration: 0.5,
        })
        
      gsap.from(".dots circle", {
        opacity: 0,
        stagger: 0.05,
      });

      // anime({
      //   targets: ".net path",
      //   strokeDashoffset: [anime.setDashoffset, 0],
      //   easing: "easeInOutSine",
      //   duration: 1500,
      // });
    }
  };

  useEffect(() => {
    animate();
  }, []);
  return (
    <Hero className="hero relative z-[0]">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="hero-content flex flex-col">
            <Image
              className="w-full window-light h-[250px] max-w-[500px] md:h-[350px] md mx-auto object-cover lg:hidden border-2 border-gray-800 mb-4 rounded-lg object-top"
              src={heroMobile}
              alt="hero-img"
              height="1000"
              width="1000"
            ></Image>

            <div className="hero-text">
              <h3 className="text-white text-center lg:text-right text-2xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-primary">انشائات</span> تفوق طموحاتك
                <br className="hidden lg:block" /> وتسمو بها فوق السحاب
              </h3>
              <p className="mt-4 text-xs md:text-base text-center lg:text-right lg:text-lg text-text leading-8 lg:leading-10">
                تسعى شركتنا لأن تكون الأفضل محليا و عربيا في مجال التجارة العامة
                والمقاولات . <br className="hidden lg:block" />
                لذلك تتميز شركتنا بالوثوقية العالية وتضمن الأمان والسلامة
                للعملاء والعاملين في قطاعاتنا المتعددة في العديد من الدول
                العربية
              </p>
            </div>

            <div className="hero-btns flex items-center gap-4 mt-8 mx-auto lg:mx-0">
              <GradiantBtn>تواصل معنا</GradiantBtn>
              <OutlinedBtn color="surface"> شاهد أعمالنا</OutlinedBtn>
            </div>
          </div>

          <div className="hero-images relative h-full flex justify-center ">
            <div className="images-container relative lg:h-[50vh] 2xl:h-[60vh] w-full hidden lg:block ">
              <Image
                className="h-full img-1 left-1/2 border-[3px] border-dark rounded-[8px] -translate-x-[90%] translate-y-[20%] absolute z-[5]   lg:w-[300px] 2xl:max-w-[350px] object-cover "
                src={heroImage}
                alt="hero-img"
                height="1000"
                width="1000"
              ></Image>
              <Image
                className="h-full img-2  left-1/2 border-[3px] border-dark rounded-[8px] -translate-x-[10%] -translate-y-[20%] absolute z-[10]  lg:w-[300px] 2xl:max-w-[350px]  object-cover "
                src={heroImage2}
                alt="hero-img"
                height="1000"
                width="1000"
              ></Image>
            </div>

            <Net className="absolute opacity-30 net hidden lg:block -translate-y-[15%] left-0 top-0 z-0"></Net>
            <Net className="absolute opacity-30 net hidden lg:block translate-y-[15%] right-0 bottom-0 z-0"></Net>
          </div>
        </div>
      </div>
      <Dots className="hidden h-24 dots md:block absolute bottom-0 right-5"></Dots>
    </Hero>
  );
}
