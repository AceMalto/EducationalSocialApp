import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
