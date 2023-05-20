import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiLocationMarker } from "react-icons/hi";
import P1I1 from "../assets/construction/tower-1.jpg";
import P1I2 from "../assets/construction/tower-2.jpg";
import P1I3 from "../assets/construction/tower-3.jpg";
import P2I1 from "../assets/construction/tower-4.jpg";
import P3I1 from "../assets/construction/tower-5.jpg";
import P4I1 from "../assets/construction/tower-6.jpg";
import P5I1 from "../assets/construction/tower-7.jpg";
import P1I5 from "../assets/construction/tower-9.jpg";
import { RxCaretLeft } from "react-icons/rx";
import { OutlinedBtn } from "./styled/Btn";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function Portfolio() {
  const [activeProject, setActiveProject] = React.useState<Project | null>(
    null
  );

  const BgGradiant = styled.div`
    background: linear-gradient(128.12deg, #1e1c2a 11.92%, #0d0c13 71.99%);
  `;

  const HovrableCard = styled.div`
  img{
    transition: 500ms;
    z-index: 1;
  }
  .overlay{
    z-index: 2;
    transition: 500ms;
  }
  &:hover{
    img{
      scale: 1.2;
    }
    .overlay{
      opacity: 0;
    }
  }
  
  `

  type Project = {
    name: string;
    type: "انشائات و بناء" | "هندسة و تخطيط" | "بنية تحتية" | "صيانة وترميم";
    location: string;
    description: string;
    images: StaticImageData[];
    id: number;
  };

  const projects: Project[] = [
    {
      name: " مشروع ابراج C1",
      images: [P1I1, P1I2, P1I3],
      location: "السعودية",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
      type: "انشائات و بناء",
      id: 1,
    },
    {
      name: "تأهيل حي E4",
      images: [P2I1, P2I1, P2I1],
      location: "الأردن",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
      type: "انشائات و بناء",
      id: 2,
    },
    {
      name: "السكن الشبابي",
      images: [P3I1, P3I1, P2I1],
      location: "سلطنة عمان",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
      type: "انشائات و بناء",
      id: 3,
    },
    {
      name: "المحطة الحرارية",
      images: [P4I1, P4I1, P2I1],
      location: "الأردن",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
      type: "انشائات و بناء",
      id: 4,
    },
    {
      name: "برج SKY STAR",
      images: [P5I1],
      location: "الأردن",
      description:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
      type: "انشائات و بناء",
      id: 5,
    },
  ];



  React.useEffect(() => {
    setActiveProject(projects[0]);
  }, []);

  return (
    <div className="relative min-w-[250px]">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-primary text-4xl font-bold">أعمالنا</h2>
        <p className="text-2xl text-dark font-bold">
          نستعرض لكم مجموعة بابرز اعمالنا في المنطقة
        </p>
      </div>
      <BgGradiant className="md:p-10 mt-4">
        <div className="flex md:justify-center items-center gap-8 p-4 overflow-x-auto ">
          <HovrableCard className="relative min-w-[250px] cursor-pointer overflow-hidden rounded-2xl  ">
            <div className="overlay bg-black/50 rounded-xl absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <h6 className="text-white text-3xl">المشروع الاول</h6>
            </div>
            <Image
              alt="porject"
              src={P1I1}
              width={500}
              height={540}
              className=" w-[250px] h-[540px] rounded-2xl"
            ></Image>
          </HovrableCard>
          <HovrableCard className="relative min-w-[250px] cursor-pointer overflow-hidden rounded-2xl">
            <div className="overlay bg-black/50 rounded-xl absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <h6 className="text-white text-3xl">المشروع الثاني</h6>
            </div>
            <Image
              alt="porject"
              src={P1I2}
              width={500}
              height={800}
              className=" w-[250px] h-[480px] rounded-xl object-cover"
            ></Image>
          </HovrableCard>
          <HovrableCard className="relative min-w-[250px] cursor-pointer overflow-hidden rounded-2xl">
            <div className="overlay bg-black/50 rounded-xl absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <h6 className="text-white text-3xl">المشروع الثالث</h6>
            </div>
            <Image
              alt="porject"
              src={P2I1}
              width={500}
              height={540}
              className=" w-[250px] h-[540px] rounded-xl object-cover"
            ></Image>
          </HovrableCard>

          <HovrableCard className="relative min-w-[250px] cursor-pointer overflow-hidden rounded-2xl">
            <div className="overlay bg-black/50 rounded-xl absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <h6 className="text-white text-3xl">المشروع الرابع</h6>
            </div>
            <Image
              alt="porject"
              src={P1I3}
              width={500}
              height={800}
              className=" w-[250px] h-[480px] rounded-xl object-cover"
            ></Image>
          </HovrableCard>
          <HovrableCard className="relative min-w-[250px] cursor-pointer overflow-hidden rounded-2xl">
            <div className="overlay bg-black/50 rounded-xl absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <h6 className="text-white text-3xl">المشروع الخامس</h6>
            </div>
            <Image
              alt="porject"
              src={P1I5}
              width={500}
              height={800}
              className=" w-[250px] object-cover h-[540px] rounded-xl"
            ></Image>
          </HovrableCard>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            href={"/portfolio"}
            className="text-white text-2xl flex gap-2 hover:text-primary transition"
          >
            رؤية المزيد
            <RxCaretLeft size={"2rem"}></RxCaretLeft>
          </Link>
        </div>
      </BgGradiant>
    </div>
  );
}
