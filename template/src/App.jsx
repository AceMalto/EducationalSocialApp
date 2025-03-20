import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recents from './pages/Recents'
import ClientDash from './pages/ClientDash'
import CreatePost from './components/CreatePost'
import Settings from './components/Settings'

function App() {

  return (
    <BrowserRouter>
      <div className='flex'>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
