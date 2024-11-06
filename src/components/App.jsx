import { useState, useEffect } from 'react'
import AnimalsContainer from "./AnimalsContainer"
import NewAnimalForm from "./NewAnimalForm"
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <Navbar />

      <Outlet />

      <footer>I AM THE FOOTER</footer>

    </div>
  )
}

export default App