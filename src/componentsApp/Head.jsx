import React from 'react'
import logo from '../assets/logo-servientrega-blanco.svg'
const Head = () => {
  return (
      <header className='w-screen flex justify-between items-center px-5 bg-green-600/90 text-white'>
          <div className='py-3'>
            <img className='w-36' src={logo}/>
          </div>
          <div className='w-8 flex flex-col justify-center items-end'>
            <div className='w-5 border'></div>
            <div style={{margin:"5px 0px "}} className='w-6 border'></div>
            <div className='w-4 border'></div>
          </div>
      </header>
      )
}

export default Head