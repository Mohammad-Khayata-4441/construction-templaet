import Image from 'next/image'
import React from 'react'
import { TbCoins, TbDiamond } from 'react-icons/tb'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { BsCalendarDate, BsBuildingFillCheck } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import AboutImage from '../assets/construction/about.jpg'
import AboutImage2 from '../assets/construction/header-14.jpg'
import TimeLine from '../assets/svg/timeline.svg'
import PatternSvg from '../assets/svg/pattern.svg'
export default function About() {
    return (
        <div>
            <div className="container max-w-screen-xl mx-auto" >

                <div className="grid grid-cols-12 px-4 md:px-0">
                    <div className="col-span-12 md:col-span-6 ">

                        <Image className='rounded-xl border-[3px] max-w-[400px] shadow-xl border-white w-[350px] xl:w-full mx-auto' src={AboutImage} height={400} width={500} alt="about" />
                    </div>
                    <div className="content col-span-12  mt-4 md:col-span-6  md:px-4 lg:px-8 ">

                        <h2 className='text-2xl font-bold text-primary text-center md:text-right'>
                            حولنا
                        </h2>

                        <h4 className='text-xl md:text-2xl mt-4 text-center md:text-right'>
                            <span className="font-bold">العمل معنا</span> يضمن لك تحقيق جميع  معايير السلامة والجودة
                        </h4>
                        <p className='mt-4 text-gray-600 text-sm text-center md:text-right'>
                            لتحقيق مبدأ السلامة للجميع  السلامة للجميع , <br /> تلتزم شركتنا بمبادئ و <span className="text-primary font-bold">معايير</span> معينة اثناء تنفيذ المشاريع لتحقق نتائج تضمن  سلامة العملاء والعاملين
                        </p>

                        <div className="timeline mt-8 flex gap-4">
                            <TimeLine className='w-10'></TimeLine>
                            <ul className='flex flex-col justify-between h-[375px]'>
                                <li>
                                    <h5 className='font-bold text-lg'>دراسة متطلبات العميل</h5>
                                    <p className='text-gray-600 text-sm md:text-base'>ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم   وانجاز المشاريع في الوقت المحدد </p>
                                </li>
                                <li>
                                    <h5 className='font-bold text-lg'>
                                        مناقشة الحلول الأمثل
                                    </h5>
                                    <p className='text-gray-600 text-sm md:text-base'>
                                        ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم  وانجاز المشاريع في الوقت المحدد
                                    </p>
                                </li>
                                <li>
                                    <h5 className='font-bold text-lg'>
                                        التنفيذ و الانجاز
                                    </h5>
                                    <p className='text-gray-600 text-sm md:text-base'>
                                        ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم وانجاز المشاريع في الوقت المحدد
                                    </p>
                                </li>
                                <li>
                                    <h5 className='font-bold text-lg'>
                                        التسليم
                                    </h5>
                                    <p className='text-gray-600 text-sm md:text-base'>
                                        ان ابرز ما يميزنا هو الالتزام بمواعيد التسليم و انجاز المشاريع في الوقت المحدد
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className='mt-24 relative '>
                <div className="container px-4 max-w-screen-xl mx-auto mb-4">

                    <h4 className='text-xl md:text-2xl font-bold mb-2 text-center md:text-right '>لماذا يجب عليك <span className="text-primary">إختيارنا</span>  نحن ؟</h4>
                    <p className='text-gray-600 text-sm md:text-base text-center md:text-right'>علاوة على الخدمات المتكاملة التي نقدمها لعملائنا  فإن العمل معنا سيمنحك الكثير من المميزات  <br /> التي ستجدها كلها في مكان واحد ! </p>
                </div>
                <div className="bg-white/80  backdrop-blur-sm z-10 relative md:h-[350px] shadow"  >
                    <div className="container max-w-screen-xl p-4 mx-auto grid relative grid-cols-1 md:grid-cols-2 items-center h-full">
                        <ul className='grid grid-cols-2 gap-8'>

                            <li className='flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row '>
                                <div className="border p-2 rounded-lg text-primary shadow-sm">

                                    <TbCoins className='text-5xl'></TbCoins>
                                </div>

                                <h5 className='text-center lg:text-right text-sm lg:text-base'> الاستثمار الامثل للموارد</h5>
                            </li>
                            <li className='flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row '>
                                <div className='border  p-2 rounded-lg text-primary shadow-sm'>
                                    <TbDiamond className='text-5xl'></TbDiamond>
                                </div>
                                <h5 className='text-center lg:text-right text-sm lg:text-base'>اعلى معايير الجودة</h5>
                            </li>
                            <li className='flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row '>
                                <div className='border  p-2 rounded-lg text-primary shadow-sm'>
                                    <AiFillSafetyCertificate className='text-5xl'></AiFillSafetyCertificate>
                                </div>
                                <h5 className='text-center lg:text-right text-sm lg:text-base'> أفضل مستويات الأمان والراحة </h5>
                            </li>
                            <li className='flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row '>
                                <div className='border  p-2 rounded-lg text-primary shadow-sm'>
                                    <BsCalendarDate className='text-5xl'></BsCalendarDate>
                                </div>
                                <h5 className='text-center lg:text-right text-sm lg:text-base'> الدقة بمواعيد التسليم </h5>
                            </li>
                            <li className='flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row '>
                                <div className='border  p-2 rounded-lg text-primary shadow-sm'>
                                    <BiSupport className='text-5xl'></BiSupport>
                                </div>
                                <h5 className='text-center lg:text-right text-sm lg:text-base'> الدعم وخدمات مابعد التسليم </h5>
                            </li>
                            <li className='flex items-center text-lg  md:text-xl gap-3 justify-center flex-col  md:justify-start md:flex-row '>
                                <div className='border  p-2 rounded-lg text-primary shadow-sm'>
                                    <BsBuildingFillCheck className='text-5xl'></BsBuildingFillCheck>
                                </div>
                                <h5 className='text-center lg:text-right text-sm lg:text-base'> الخدمات المتكاملة</h5>
                            </li>


                        </ul>





                        <div className="relative z-10 h-full">
                            <div className="image absolute z-30  lg:-top-24 left-0">
                                <Image alt="about" className='rounded-xl hidden md:block border-[3px] shadow-xl border-white w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]' height={600} width={600} src={AboutImage2}></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container relative">

                <PatternSvg className='absolute -z-10 left-0  lg:translate-x-2/3 -bottom-24 lg:-bottom-16 drop-shadow-md '></PatternSvg>
                </div>
:


            </div>

        </div>
    )
}
