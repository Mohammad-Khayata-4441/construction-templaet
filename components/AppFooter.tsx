import React from 'react'
import Logo from '../assets/svg/Logo.svg'
import Image from 'next/image'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
export default function AppFooter() {
  return (

<footer className="bg-dark mt-8" >
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
        
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">اقسام الموقع</h2>
                  <ul className=" text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">الرئيسية</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">معرض الاعمال</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">تابعنا</h2>
                  <ul className=" text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">تويتر</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">فيسبوك</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">المصادر</h2>
                  <ul className=" text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Freepik</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Unsplash</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="mb-6 md:mb-0 flex gap-4 brand items-center">
                  <span className="self-center brand text-2xl font-semibold whitespace-nowrap text-white">JDM Contractors</span>
                    <Logo className='h-16'></Logo>
          </div>
      </div>
      <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 -gray-400">© 2023 <a href="https://https://mohammad-khayata.vercel.app/" className="hover:underline">Mohammad Khayata™</a>. جميع الحقوق محفوظة.
          </span>
          <div className="flex mt-4 gap-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500  hover:text-white">
                  <BsFacebook/>
              </a>
              <a href="#" className="text-gray-500  hover:text-white">
                  <BsInstagram/>
              </a>
              <a href="#" className="text-gray-500  hover:text-white">
                  <BsTwitter/>
              </a>
              <a href="#" className="text-gray-500  hover:text-white">
                  <BsGithub/>
              </a>
              <a href="#" className="text-gray-500  hover:text-white">
                  <BsDribbble/>
              </a>
          </div>
      </div>
    </div>
</footer>
  )
}
