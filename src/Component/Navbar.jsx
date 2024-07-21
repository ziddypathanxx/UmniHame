import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const [hame, setHame] = useState(false);

    return (
        <div className={`flex h-16 pt-4 fixed z-10 p-2 ${hame ? 'max-sm:h-[13rem]' : 'max-sm:h-16'} transition-all overflow-hidden bg-white max-sm:items-start items-center ml-[4vw] w-[92vw] justify-around max-sm:justify-between max-sm:w-full max-sm:m-0`}>
            <div>
                <Link to='/'>
                    <h1 className='text-3xl cursor-pointer favcolor font-bold max-sm:w-full max-sm:justify-between max-sm:flex'>UmniHame.</h1>
                </Link>
            </div>

            <nav>
                <ul className='flex max-sm:left-28 max-sm:w-28 max-sm:absolute max-sm:pr-2 max-sm:text-center max-sm:justify-center max-sm:items-center gap-12 max-sm:gap-2 max-sm:text-nowrap max-sm:mt-12 text-lg max-sm:flex-col'>
                    <a href='#home' onClick={() => setMenu("Home")} className={`${menu === "Home" ? "border-b-2 opacity-100 max-sm:opacity-100 w-12 border-black" : ""} cursor-pointer transition-all opacity-70`}>Home</a>
                    <a href='#menu-explore' onClick={() => setMenu("Menu")} className={`${menu === "Menu" ? "border-b-2 opacity-100 max-sm:opacity-100 w-12 border-black" : ""} cursor-pointer transition-all opacity-70`}>Menu</a>
                    <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={`${menu === "Mobile-app" ? "border-b-2 max-sm:opacity-100  opacity-100 border-black" : ""} cursor-pointer transition-all opacity-70`}>Mobile-app</a>
                    <a href='#footer' onClick={() => setMenu("Contact-us")} className={`${menu === "Contact-us" ? "border-b-2 max-sm:opacity-100  opacity-100 border-black" : ""} cursor-pointer transition-all opacity-70`}>Contact-us</a>
                </ul>
            </nav>

            <div className='flex gap-8 max-sm:gap-4'>
                <button className='text-2xl max-sm:h-6 max-sm:w-6'><IoSearch /></button>

                <button className='relative max-sm:h-6 max-sm:w-6 text-2xl'>
                    <Link to='/carts'><FaBasketShopping /></Link>
                    <div className='absolute h-2 inset-y-0 ml-3 w-2 rounded-full bg-red-500'></div>
                </button>

                <button onClick={() => setShowLogin(true)} className='flex text-basemax-sm:h-6 max-sm:hidden h-8 w-20 rounded-2xl border-black border-[1px] justify-center items-center hover:bg-orange-100'>Sign In</button>
                <RiAccountCircleFill onClick={() => setShowLogin(true)} className='max-sm:flex hidden max-sm:w-6 max-sm:h-6' />
                <GiHamburgerMenu onClick={() => setHame(!hame)} className='max-sm:h-6 max-sm:w-6 max-sm:flex hidden' />
            </div>
        </div>
    )
}

export default Navbar;
