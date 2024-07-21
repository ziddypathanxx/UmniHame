import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = ({setShowLogin}) => {

    const [correct, setCorrect] = useState("Login")

  return (
    <div className='w-screen fixed h-screen justify-center items-center z-10 bg-[#00000090] grid'>
      <form className=' p-8 rounded-lg bg-white'>
        <div className='flex h-8 items-center justify-between'>
            <h1 className='font-bold text-xl'>{correct}</h1>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className='flex-col flex'>
            {correct==="Login"?<></>:<input className='h-10 pl-3 w-auto border-[1px] text border-[#00000060] mt-6 rounded-lg' type='text' placeholder='Your name' required />}
            <input className='h-10 pl-3 w-auto border-[1px] text border-[#00000060] mt-6 rounded-lg' type="email" placeholder='Your email' required/>
            <input className='h-10 pl-3 w-auto border-[1px] text border-[#00000060] mt-6 rounded-lg' type="password" placeholder='Password' required/>
        </div>

        <button className='favbgcolor p-1.5 text-lg w-full mt-7 rounded-lg'>{correct==="Sign Up"?"Create account":"Login"}</button>
        <div className='flex items-start flex-wrap mt-4'>
            <input className='mr-2 mt-2 ' type="checkbox" required />
            <p className='flex-wrap w-[24rem]'>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

        {correct==="Login"
        ?<p className='w-auto mt-10'>Create a new account? <span className='text-red-400 cursor-pointer' onClick={()=>setCorrect("Sign Up")}>Click here</span></p>
        :<p className='w-auto mt-10'>Already have an account? <span className='text-red-400 cursor-pointer' onClick={()=>setCorrect("Login")}>Login here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default Login
