import React from 'react'
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import Footer from '../../Component/Footer';

const Order = () => {
  
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='flex flex-col max-sm:flex-col max-sm:h-auto h-auto'>
        <form className='pt-20 h-auto max-sm:flex-col flex w-screen'>
      <div className='flex-col h-full max-sm:h-auto flex max-sm:items-start items-center w-[50vw]'>
        <div className='flex-col max-sm:ml-4 max-sm:mt-6 max-sm:w-[90vw] max-sm:gap-3 mt-20 gap-5 flex w-[30vw]'>
        <p className='text-3xl max-sm:mb-2 mb-7 max-sm:text-xl font-bold'>Delivery Information</p>

        <div className='flex gap-1 max-sm:w-[90vw]'>
          <input className='h-9 max-sm:w-[45vw] max-sm:h-8 border-[#00000040] pl-2 rounded-[3px] border-2' type="text" placeholder='Last name'/>
          <input className='h-9 max-sm:w-[45vw] max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2'  type="text" placeholder='First name'/>
        </div>
  
          <input className='h-9 max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2' type="email" placeholder='Email address'/>
          <input className='h-9 max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2' type="text" placeholder='Street'/>
      
        <div className='flex gap-1'>
          <input className='h-9 max-sm:w-[45vw] max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2' type="text" placeholder='City'/>
          <input className='h-9 max-sm:w-[45vw] max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2' type="text" placeholder='State'/>
        </div>

        <div className='flex gap-1'>
          <input className='h-9 max-sm:w-[45vw] max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2' type="text" placeholder='Zip code'/>
          <input className='h-9 max-sm:w-[45vw] max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2' type="text" placeholder='Country'/>
        </div>

        <input className='h-9 max-sm:h-8 border-[#00000040]  pl-2 rounded-[3px] border-2' type="text" placeholder='Phone'/>

      </div>
      </div>


      <div>
      <div className="h-auto my-16 max-sm:w-[90vw] max-sm:ml-4 max-sm:mt-16 w-[35vw] ml-10">
            <h2 className="font-bold text-2xl max-sm:mb-4 mb-10">Cart Totals</h2>

            <div className="flex my-2 justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex my-2  justify-between">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="flex my-2 justify-between">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <button className="mt-5 h-10 max-sm:text-sm max-sm:px-3 justify-center rounded-[5px] items-center bg-orange-500 text-white px-8">
              PROCEED TO PAYMENT
            </button>
          </div>
      </div>

      

    </form>
      <Footer/>
    </div>

  )
}

export default Order
