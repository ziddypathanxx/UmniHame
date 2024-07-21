import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' className='w-full flex max-sm:justify-center max-sm:items-center flex-col h-auto justify-center items-center mt-5'>
      <p className='text-3xl max-sm:text-xl max-sm:h-8 flex h-12 font-bold'>For Better Experince Downlaod</p>
      <p className='text-3xl font-bold max-sm:text-2xl h-12'>UmniHame</p>
      <div className='flex h-16 max-sm:w-60 w-[20vw] justify-between'>
      <img className='h-12 hover:scale-105 max-sm:w-28 max-sm:h-10 transition-all' src={assets.play_store} alt="" />
      <img className='h-12 hover:scale-105 max-sm:w-28 max-sm:h-10 transition-all' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
