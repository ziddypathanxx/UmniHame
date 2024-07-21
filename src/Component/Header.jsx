import React from 'react'
import header_img from '../assets/header_img.png'

const Header = () => {
  return (
    <div  id='home' className='flex max-sm:mb-10 justify-center h-auto w-screen my-3 overflow-x-hidden'>

      <div className={`flex max-sm:h-80 max-sm:w-screen rounded-xl max-sm:m-1 bg-no-repeat bg-cover w-[80vw] headintor relative h-[75vh] max-sm:bg-cover justify-center`} style={{backgroundImage:`url(${header_img})`}}>
               
        <div className='absolute max-sm:left-1 max-sm:top-16  max-sm:w-80 max-sm:h-60 h-auto w-2/5  left-24 top-44'>
        <h1 className='text-5xl max-sm:h-16 max-sm:text-2xl max-sm:w-[20rem] w-[50rem] h-auto font-bold text-white'>Order your favourite food form UmniHame.</h1>
        <p className='my-4 max-sm:text-sm max-sm:w-[20rem] w-[30rem] text-white text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sapiente quos impedit quis quidem omnis ad architecto, laborum, quam natus repellendus nam obcaecati nisi perferendis dolor beatae corporis recusandae? Delectus.</p>
        <button className='text-black max-sm:w-20 max-sm:h-8 max-sm:text-[12px] opacity-80 transition-all hover:opacity-100 text-sm rounded-full justify-center items-center h-10 bg-white w-32'>View Menu</button>
        </div>

      </div>

    </div>
  )
}

export default Header
