import React, { useState } from 'react'
import Header from '../../Component/Header'
import Menu_Explore from '../../Component/Menu_Explore'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import AppDownload from '../../Component/AppDownload'
import Footer from '../../Component/Footer'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div className='pt-20'>
      <Header/>
      <Menu_Explore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home
