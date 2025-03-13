import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recents from './pages/Recents'

function App() {

  return (
    <BrowserRouter>
      <div className='flex'>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Recents/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
