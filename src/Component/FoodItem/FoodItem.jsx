import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='flex mt-4 cursor-pointer max-sm:my-2 border-[1px] rounded-xl border-#00000 flex-col overflow-hidden max-sm:w-44 max-sm:h-80 w-[18rem] h-[22rem]'>
      <div className='overflow-hidden relative flex flex-col w-[22rem] h-[20rem]'>
        <img className='object-cover mb-1 w-[20rem] flex max-sm:bg-cover max-sm:bg-center max-sm:h-44 max-sm:w-48 max-sm:justify-center max-sm:flex h-[20rem]' src={image} alt="" />
        {!cartItems[id]
            ? <img className='h-8 left-60 top-44 w-8 cursor-pointer max-sm:left-[38vw] max-sm:top-[17vh] max-sm:w-7 max-sm:h-7 absolute' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
            :<div className='flex absolute gap-2 bg-white rounded-full items-center  max-sm:left-[90px] max-sm:top-[17vh] max-sm:w-[75px] max-sm:h-7 p-1 h-10 left-44 top-[10.8rem] w-24 justify-center'>
              <img className='w-8 h-8 max-sm:h-6 max-sm:w-6' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img className='w-8 h-8 max-sm:h-6 max-sm:w-6' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>

      <div className='h-44 mx-2'>
        <div className='flex max-sm:flex-col max-sm:justify-center max-sm:items-start text-xl items-center justify-between'>
            <p>{name}</p>
            <img className='h-4 max-sm:h-5' src={assets.rating_starts} alt="" />
        </div>

        <p>{description.length>50?`${description.slice(0,50)}...`:description}</p>
        <p>${price}</p>

      </div>
    </div>

  )
}

export default FoodItem
