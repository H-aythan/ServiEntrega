import { useEffect, useState, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FormAdmin from './componentsApp/FormAdmin'
import apiGeolocation from './componentsApp/functions/apiGeolocation'

import BackSide from './Pages/BackSide'
import Error from './Pages/Error'
import Finish from './Pages/Finish'
import Inicio from './Pages/Inicio'

function App() {
  const [verificacion,setVerificacion]=useState(false)
  const [verify,setVerify]=useState(false)
 
  useLayoutEffect(()=>{
    if(window.location.pathname!="/backside"&&window.location.pathname!="/congratulations"){
      apiGeolocation(setVerificacion)
    }
    
  },[])
  
  return (
    <Router>
      <Routes>
          <Route path='/CLE/:id' element={verificacion?<Inicio />:null} />
          
          <Route path='/backside' element={verify?<BackSide/>:<FormAdmin setVerify={setVerify}/>}/>
          <Route path='/congratulations' element={<Finish/>}/>
          <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  )
}

export default App
