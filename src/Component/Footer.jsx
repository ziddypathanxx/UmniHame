import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {

  const [footerdec, setFooterDec] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui voluptas, voluptates provident ut dicta mollitia quis fugiat labore, similique eligendi accusamus ad quos unde cum iusto esse facilis recusandae illo.")

  return (
    <div id='footer' className='flex max-sm:relative flex-col w-screen mt-16 max-sm:mt-4 max-sm:h-[50.5vh] max-sm:justify-start h-auto items-center justify-center bg-[#333333]'>
      <div className='flex h-70 w-[80vw] max-sm:w-screen'>

        <div className='w-[40vw] max-sm:p-2 max-sm:h-60 max-sm:w-44 pl-4 pt-10'>
            <h1 className='text-4xl h-auto max-sm:text-2xl font-bold favcolor'>UmniHame.</h1>
            <p className='text-[15px] max-sm:w-40 text-white max-sm:my-1 my-2 w-[37vw]'>{footerdec.length>99?`${footerdec.slice(0,99)}...`:footerdec}</p>

            <div className='h-auto w-[7rem] mt-5 justify-between flex'>
                <button className='text-white text-xl h-8 w-8 justify-center items-center flex rounded-full border-[1px]'><FaInstagram /></button>
                <button className='text-white text-xl h-8 w-8 justify-center items-center flex rounded-full border-[1px]'><FaTwitter /></button>
                <button className='text-white text-xl h-8 w-8 justify-center items-center flex rounded-full border-[1px]'><FaLinkedinIn /></button>
            </div>
        </div>


      
        <div className='pl-6 max-sm:w-auto max-sm:pt-1 max-sm:60 h-auto w-[20vw] py-10'>
            <h1 className='font-bold max-sm:text-xl max-sm:my-2 text-white text-xl mb-6'>COMPANY</h1>
           <ul className='text-white text-[15px] h-[8rem]'>
            <li className='mt-1'>Home</li>
            <li className='mt-1'>About us</li>
            <li className='mt-1'>Delivery</li>
            <li className='mt-1'>Privacy policy</li>
            </ul>
        </div>

        <div className='pl-2 max-sm:top-60 max-sm:w-screen max-sm:justify-center max-sm:h-20 max-sm:flex-col max-sm:flex max-sm:items-center max-sm:absolute text-white w-[20vw] py-10 '>
            <h1 className='text-xl font-bold max-sm:m-1 max-sm:text-xl mb-6'>GET IN TOUCH</h1>
            <p>+91-957-951-9426</p>
            <p>contact@UmniHame.com</p>
        </div>
        

      </div>

    <div className='w-screen max-sm:top-[45vh] max-sm:absolute justify-center items-center h-10 flex border-t-[1px]'>
        <p className='text-white text-sm'>Copyright 2024 © UmniHame.com - All Right Reserved.</p>
    </div>

    </div>
  )
}

export default Footer
