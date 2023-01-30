import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Foot from './componentsApp/Foot'
import Head from './componentsApp/Head'
import BackSide from './Pages/BackSide'
import Inicio from './Pages/Inicio'

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={
            <>
              <Head/>
              <Inicio />
              <Foot/>
            </>
          } />
          
          <Route path='/backside' element={<BackSide/>}/>
          
          <Route path='*' element={
            <div className='w-screen h-screen overflow-hidden '>
              Error
            </div>
          } />
      </Routes>
    </Router>
  )
}

export default App
