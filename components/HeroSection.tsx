import Net from '../assets/svg/net.svg'
import Dots from '../assets/svg/dots.svg'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import heroImage from '@/assets/construction/header-10.jpg'
import heroImage2 from '@/assets/construction/header-12.jpg'
import heroMobile from '@/assets/construction/header-13.jpg'

import { GradiantBtn, OutlinedBtn } from './styled/Btn'
const Hero = styled.header`
    background:  linear-gradient(128.12deg, #1E1C2A 11.92%, #0D0C13 71.99%);
    height: 100vh;
    padding-top: 80px;
    display: flex;
    align-items: center;

`

export default function HeroSection() {


    return (
        <Hero className='relative z-[0]' >
            <div className="xl:container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
                    <div className="hero-content flex flex-col">
                        <Image className='w-full window-light h-[200px] max-w-[500px] md:h-[250px] md mx-auto object-cover lg:hidden border-2 border-gray-800 mb-4 rounded-lg object-top ' src={heroMobile} alt='hero-img' height='1000' width='1000'></Image>

                        <div className="hero-text">

                            <h3 className='text-white text-center lg:text-right text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold'>
                                <span className="text-secondary">انشائات</span>  تفوق طموحاتك  <br className='hidden lg:block' /> وتسمو بها فوق السحاب</h3>
                            <p className='mt-4 text-xs md:text-base text-center lg:text-right lg:text-lg text-text leading-8 lg:leading-10'>
                                تسعى شركتنا لأن تكون الأفضل محليا و عربيا في مجال التجارة العامة  والمقاولات . <br className='hidden lg:block' />
                                لذلك تتميز شركتنا بالوثوقية العالية وتضمن الأمان والسلامة للعملاء
                                والعاملين في قطاعاتنا المتعددة في العديد من  الدول العربية
                            </p>
                        </div>

                        <div className="hero-btns flex items-center gap-4 mt-8 mx-auto lg:mx-0">
                            <GradiantBtn  >تواصل معنا</GradiantBtn>
                            <OutlinedBtn color='surface'>
                                معرض الأعمال
                            </OutlinedBtn>
                        </div>

                    </div>


                    <div className="hero-images relative h-full flex justify-center ">
                        <div className="images-container relative lg:h-[55vh] 2xl:h-[60vh] w-full hidden lg:block ">
                            <Image className='h-full left-1/2 border-[3px] border-dark rounded-[8px] -translate-x-[90%] translate-y-[20%] absolute z-[5]   lg:w-[40vh]   2xl:w-[50vh] object-cover ' src={heroImage} alt='hero-img' height='1000' width='1000'></Image>
                            <Image className='h-full  left-1/2 border-[3px] border-dark rounded-[8px] -translate-x-[10%] -translate-y-[20%] absolute z-[10]  lg:w-[40vh] 2xl:w-[50vh]  object-cover ' src={heroImage2} alt='hero-img' height='1000' width='1000'></Image>
                        </div>

                        <Net className='absolute opacity-30  hidden lg:block -translate-y-[15%]  left-0 top-0 z-0'></Net>
                        <Net className='absolute opacity-30  hidden lg:block translate-y-[15%] right-0 bottom-0 z-0'></Net>
                    </div>

                </div>
            </div>
            <Dots className='hidden md:block absolute bottom-5 right-5'></Dots>
        </Hero>
    )
}
