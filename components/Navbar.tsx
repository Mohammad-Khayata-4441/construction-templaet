import Link from "next/link";
import React, { useState, useRef, useEffect, useMemo } from "react";
import NavLink from "./NavLink";
import styled from "styled-components";
import { TbMenu } from "react-icons/tb";
import { useOnClickOutside } from "usehooks-ts";
import Logo from '../assets/svg/Logo.svg'
const links = [
  {
    href: "/",
    title: "الرئيسية",
  },
  {
    href: "/#about",
    title: "حولنا",
  },
  {
    href: "/#services",
    title: "خدماتنا",
  },
  {
    href: "/#protfolio",
    title: "معرض  الأعمال",
  },
];

const BtnIcon = styled.button`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 24px;
  color: white;
  border: 1px solid ${props=>props.theme[props.color as string]??'white'};
  transition: 0.4s;
  &:hover {
    color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.primary};
  }
`;

const StyledHeader = styled.header<{ scrolled: boolean }>`
  @keyframes slideDown {
    from {
      padding: 0;
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  &.navbar-scrolled {
    animation: slideDown 0.5s;
  }
`;

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <>
      <div ref={ref} className="lg:hidden">
        <BtnIcon color='primary' className="border-primary" onClick={() => setOpen((o) => !o)}>
          <TbMenu className="text-primary" />
        </BtnIcon>
        {isOpen && (
          <ul className="bg-dark absolute -bottom-4 w-full right-0 translate-y-full border border-gray-700 rounded-[8px]">
            {links.map((l) => (
              <li
                className="text-white transition hover:bg-white/5 w-full text-center"
                key={l.href}
              >
                <NavLink
                  href={l.href}
                  activeClass="text-primary "
                  className={"block p-4 w-full"}
                >
                  {l.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const Navbar = ()=> {
  const [scroll, setScroll] = useState(0);
  const scrolledDown = useMemo(() => {
    if (typeof window !== "undefined")
      return scroll > window.innerHeight - window.innerHeight ;
    else return false;
  }, [scroll]);
  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("scroll", () =>
        setScroll(Math.ceil(window.scrollY))
      );
  }, []);
  return (
    <StyledHeader
      scrolled={scrolledDown}
      className={`py-4 lg:py-0 lg:h-20 z-[50] flex items-center w-full top-0 navbar transition duration-300 px-8 ${
        scrolledDown
          ? "bg-white/90 navbar-scrolled fixed shadow opacity-100 backdrop-blur-xl"
          : "bg-transparent absolute"
      }`}
    >
      <div className="container max-w-screen-xl mx-auto flex items-center justify-between relative">
        <nav className="nav hidden lg:flex  items-center ">
          <ul
            className={`flex ${
              !scrolledDown ? "text-white" : "text-dark"
            } gap-12 nav-links items-center `}
          >
            {links.map((li) => (
              <li key={li.title}>
                <NavLink
                  activeClass="text-primary "
                  className={"px-2 py-4  text-lg "}
                  href={li.href}
                >
                  {li.title}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                className="p-2 border text-primary border-primary rounded "
                href={"/contact"}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>

        <MobileNav />

        <div className="brand flex items-center gap-4">
          <div className="text-2xl xtext-white">
            {scrolledDown ? 
            <h6 className="text-dark brand">{'Sweet Living'}</h6> :  <h6 className="text-white brand ">{'Sweet Living'}</h6> }
          </div>
          <Logo className={`h-12 ${scrolledDown?'text-dark':'text-white'}`}  />
        </div>
      </div>
    </StyledHeader>
  );
}

export default Navbar;
