import Link from 'next/link'
import React, { useState, useRef } from 'react'
import NavLink from './NavLink'
import styled from 'styled-components'
import { TbMenu } from 'react-icons/tb'
import { useOnClickOutside } from 'usehooks-ts'
const links = [
    {
        href: "/",
        title: "الرئيسية"
    },
    {
        href: "/#about",
        title: "حولنا"
    },
    {
        href: "/#services",
        title: "خدماتنا"
    },
    {
        href: "/#protfolio",
        title: "معرض  الأعمال"
    },

]

const BtnIcon = styled.button`
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 24px;
    color:white;
    border: 1px solid white;
    transition: 0.4s;
    &:hover{
        color: ${props => props.theme.primary};
        border-color: ${props => props.theme.primary};
    }
`

const MobileNav = () => {
    const [isOpen, setOpen] = useState(false)
    const ref = useRef(null);
    useOnClickOutside(ref, () => setOpen(false))
    return (
        <>
            <div ref={ref} className='lg:hidden'>
                <BtnIcon onClick={() => setOpen((o) => !o)}>
                    <TbMenu />
                </BtnIcon>
                {
                    isOpen &&
                    <ul className='bg-dark absolute -bottom-4 w-full right-0 translate-y-full border border-gray-700 rounded-[8px]'>
                        {
                            links.map(l => (

                                <li className='text-white transition hover:bg-white/5 w-full text-center' key={l.href}>
                                    <NavLink href={l.href} activeClass='text-primary ' className={'block p-4 w-full'}>
                                        {l.title}
                                    </NavLink>
                                </li>

                            ))
                        }
                    </ul>
                }


            </div>
        </>
    )
}



function Navbar() {


    return (
        <nav className={`fixed h-20 z-[1] flex items-center w-full top-0 navbar px-8`}>
            <div className="container mx-auto flex justify-between relative">

                <div className="nav hidden lg:flex  items-center ">
                    <ul className='flex text-white gap-16 nav-links items-center '>
                        {links.map((li) =>
                            <li key={li.title} >
                                <NavLink activeClass='text-primary' className={'px-2'} href={li.href}>{li.title}</NavLink>
                            </li>)
                        }
                        <li  >
                            <Link className='p-2 border text-secondary border-secondary rounded ' href={'/contact'}>تواصل معنا</Link>
                        </li>
                    </ul>
                </div>

                <MobileNav />

                <div className="brand">

                    <h2 className='text-2xl text-white'>
                        BRAND LOGO
                    </h2>

                </div>
            </div>
        </nav >
    )
}

export default Navbar