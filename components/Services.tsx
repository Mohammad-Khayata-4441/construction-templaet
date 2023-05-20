import React from "react";
import fire from "../assets/construction/FireFighter.jpg";
import Image from "next/image";
import Heavy from "../assets/construction/HeavyLifting.jpg";
import Project from "../assets/construction/header-13.jpg";
import Constrution from "../assets/construction/header-14.jpg";
import Machine from "../assets/construction/construction-2.jpg";
import HavcCompleteSolution from "../assets/construction/HavcCompleteSolutions.jpg";
import StreetWork from "../assets/construction/ConcreteRepair.jpg";
import Planning from "../assets/construction/planning.jpg";
export default function Services() {
  return (
    <section className="text-gray-600 body-font relative ">
      <svg
        className="absolute left-0 top-24"
        width="279"
        height="267"
        viewBox="0 0 279 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M76.5 21.963L111.3 42.0548C116.25 44.9129 119.3 50.1949 119.3 55.9112V96.0948C119.3 101.811 116.25 107.093 111.3 109.951L76.5 130.043C71.5496 132.901 65.4504 132.901 60.5 130.043L25.7 109.951C20.7496 107.093 17.7 101.811 17.7 96.0948V55.9112C17.7 50.1949 20.7496 44.9129 25.7 42.0548L60.5 21.963C65.4504 19.1049 71.5496 19.1049 76.5 21.963Z"
          fill="#EA5400"
          fillOpacity="0.17"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.5 2.67949C72.312 -0.893166 64.688 -0.893162 58.5 2.67949L10 30.681C3.81198 34.2536 0 40.8562 0 48.0015V104.004C0 111.15 3.81198 117.752 10 121.325L58.5 149.326C64.688 152.899 72.312 152.899 78.5 149.326L127 121.325C133.188 117.752 137 111.15 137 104.004V48.0015C137 40.8562 133.188 34.2536 127 30.681L78.5 2.67949ZM58.5 18.4989C64.688 14.9262 72.312 14.9262 78.5 18.4989L113.3 38.5907C119.488 42.1633 123.3 48.7659 123.3 55.9112V96.0948C123.3 103.24 119.488 109.843 113.3 113.415L78.5 133.507C72.312 137.08 64.688 137.08 58.5 133.507L23.7 113.415C17.512 109.843 13.7 103.24 13.7 96.0948V55.9112C13.7 48.7659 17.512 42.1633 23.7 38.5907L58.5 18.4989Z"
          fill="#EA5400"
          fillOpacity="0.17"
        />

        <path
          d="M246 94.0853C247.856 93.0135 250.144 93.0135 252 94.0853L271.981 105.621C273.837 106.693 274.981 108.674 274.981 110.817V133.889C274.981 136.033 273.837 138.014 271.981 139.085L252 150.621C250.144 151.693 247.856 151.693 246 150.621L226.019 139.085C224.163 138.014 223.019 136.033 223.019 133.889V110.817C223.019 108.674 224.163 106.693 226.019 105.621L246 94.0853Z"
          fill="#FF7A00"
          fillOpacity="0.11"
        />
      </svg>

      <div className="container max-w-screen-xl px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-primary">
              خدماتنا
            </h1>
            <p className="text-dark text-2xl font-bold">
              تعرف على خدماتنا المتكاملة من الألف إلى الياء
            </p>
            <p className=" w-full leading-relaxed text-gray-500">
              نقدم لك مجموعة من الخدمات المميزة والتي تكمل بعضها بعضا لتستطيع
              تنفيذ مشروعك من نقطة الصفر الى نقطة النهاية دون الحاجةالى التعاون
              مع اي جهات أخرى. معنا .. ستستطيع البدأ بمشروعك انطلاقا من التخطيط
              والهندسة وصولا الى الرخص والموافقات الحكومية وكل ما يتطلبه المشروع
              من اجرائات قانونية
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4 relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={Constrution}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                العمار والبناء
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                الابراج السكنية وناطحات السحاب
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4 relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={Project}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                العمار والبناء
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                تنفيذ مشاريع الانشاء
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4 relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={Heavy}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                الهندسة
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                الصيانة والتشغيل للمباني
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4  relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={fire}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                البنية التحتية
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                انظمة الحريق والإطفاء
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4 relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={HavcCompleteSolution}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                قسم البنية التحتية
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                اجهزة التبريد والتكييف
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4 relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={Machine}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                قسم الموارد المادية
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                المعدات والاليات الثقيلة
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4 relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={StreetWork}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                قسم الهندسة
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                الاعمال والصيانة الطرقية
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-4 relative">
            <div className="bg-white p-3 rounded-2xl border ">
              <Image
                height={400}
                width={720}
                className="h-40 rounded-2xl shadow-md scale-[1.15] w-full object-cover object-center mb-6"
                src={Planning}
                alt="content"
              />
              <h3 className="tracking-widest text-primary text-xs font-medium title-font">
                قسم الهندسة
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                الدراسة والتخطيط
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
