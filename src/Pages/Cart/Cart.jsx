import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../Context/StoreContext";
import Footer from "../../Component/Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate(); 

   
    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems){
    //         if (cartItems[item]>0){
    //             let itemInfo = food_list.find((product)=>product._id === item);
    //             totalAmount += itemInfo.price * cartItems[item];
    //         }
    //     }
    //     return totalAmount;
    // }

  return (
    <div className="w-screen h-auto justify-center  flex-col max-sm: flex pt-32">
      <div className="w-[75vw] max-sm:mx-2 max-sm:w-[95vw] ml-[13vw]">
        <div className="flex max-sm:justify-between max-sm:text-sm max-sm:w-screen text-[#00000090] mb-8 w-[75vw] ">
          <p className=" max-sm:w-20">Items</p>
          <p className="max-sm:ml-0 ml-[14rem]">Title</p>
          <p className="max-sm:ml-0 ml-[13.5rem]">Price</p>
          <p className="max-sm:ml-0 ml-[9rem]">Quantity</p>
          <p className="max-sm:ml-0 ml-[9rem]">Totle</p>
          <p className="max-sm:ml-0 ml-[9.5rem]">Remevo</p>
        </div>
        <hr className="my-4 h-[1.5px] bg-[#00000030]" />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="flex flex-col">
                <div className="flex max-sm:text-sm justify-between max-sm:w-[95vw] items-center w-[73vw]">
                  <img className="h-12 w-16" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="text-lg cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="my-4 h-[1.5px] bg-[#00000030]" />
              </div>
            );
          }
        })}

        <div className="my-20 max-sm:my-8 flex max-sm:ml-2 max-sm:flex-col-reverse">
          <div className="h-auto max-sm:w-[93vw] max-sm:mt-12 w-[35vw] mr-[10vw]">
            <h2 className="font-bold text-xl mb-4">Cart Totals</h2>

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
            <button onClick={()=>navigate('/order')} className="mt-5 h-10 max-sm:text-sm max-sm:px-3 justify-center rounded-[5px] items-center bg-orange-500 text-white px-8">
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div>
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div>
                <input
                  className="bg-slate-100 h-9 mt-2 pl-3 w-80 max-sm:w-[58vw]"
                  type="text"
                  placeholder="Promo code"
                />
                <button className="h-9 bg-black text-white px-9 rounded-[5px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
