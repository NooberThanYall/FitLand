import { useState } from 'react'
import TopBar from './Components/TopBar/TopBar'
import BottomMenu from './Components/BottomMenu/BottomMenu'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
    <TopBar />
    <NavBar />
    <Home />
    <BottomMenu />
    </>
  )
}

export default App
