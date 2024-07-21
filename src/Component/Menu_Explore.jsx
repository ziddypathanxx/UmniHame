import React from 'react'
import { menu_list } from '../assets/assets'

function Menu_Explore({category, setCategory}) {

  return (
    <div id='menu-explore' className='m-0 max-sm:m-1 max-sm:w-screen p-0 overflow-x-auto h-50 w-[77rem] overflow-hidden ml-40'>
        <h1 className='text-2xl max-sm:text-lg max-sm:mb-3 font-bold'>Explore Our Menu...</h1>
        <p className='text-lg max-sm:text-sm max-sm:w-80 max-sm:my-1 my-4 w-[50vw]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>

        <div className='flex max-sm:h-auto max-sm:overflow-x-scroll max-sm:w-full w-[77rem] h-auto items-center max-sm:my-6 max-sm:gap-2 gap-6'>
            {menu_list.map((item, index) => {
            return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='flex-col max-sm:justify-start max-sm:items-center max-sm:h-auto max-sm:m-0 max-sm:w-auto cursor-pointer justify-center flex items-center w-[8.5vw] h-44 mt-6 max-sm:gap-2 gap-3'>
                <img className={`${category === item.menu_name ? "border-4 rounded-full p-[2px]" : ""} flex max-sm:w-40`} src={item.menu_image} alt="" />
                <p className='max-sm:flex  max-sm:w-20 max-sm:justify-center'>{item.menu_name}</p>
            </div>
        )
        })}
        </div>

        <hr className='w-[77w] my-5 max-sm:my-3 h-[2px] max-sm:w-full bg-black'/>
    </div>
  )
}

export default Menu_Explore
