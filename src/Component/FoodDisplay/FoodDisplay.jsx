import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='flex flex-col mt-2 max-sm:flex-wrap h-auto headintor ml-[9.5rem] w-[80vw] max-sm:m-0 max-sm:w-screen'>
      <h2 className='text-2xl my-5 ml-2 font-bold max-sm:text-xl max-sm:my-2'>Top Dishes Near You...</h2>
      <div className='flex flex-wrap justify-around'>
        {food_list.map((item, index) => {
          if (category==="All" || category===item.category){
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              className='m-2'
            />
          );
        }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
