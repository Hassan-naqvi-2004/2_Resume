import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import About from './components/About'
import Skills from './components/Skills'
import Main_page from './components/Main-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main_page/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/About' element={<About/>}/>
   
    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
