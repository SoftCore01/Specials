import { useState, } from 'react'
import ShowSpecial from "./components/ShowSpecial";
import PostSpecial from "./components/PostSpecial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FoodContext, mockSpecials, type FoodType } from './utils'


function App() {
  const [specials, setSpecials] = useState<FoodType[]>(mockSpecials)
  const [reservations, setReservations] = useState<FoodType[]>([])
  

  return (
    <>
    <FoodContext value={{specials, setSpecials, reservations, setReservations}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<ShowSpecial/>} />
          <Route path='/postspecial' element={<PostSpecial/>} />
        </Routes>
      </BrowserRouter>
    </FoodContext>
      
    </>
  )
}

export default App
