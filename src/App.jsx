import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import Order from "./Pages/Order/Order"
import { useState } from "react"
import Login from "./Component/Login"

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    <Navbar setShowLogin={setShowLogin}/>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="overflow-x-hidden">

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Carts" element={<Cart/>} />
      <Route path="/Order" element={<Order/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
