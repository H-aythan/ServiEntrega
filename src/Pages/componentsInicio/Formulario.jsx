import React from 'react'
import ReactDOM from 'react-dom'
import visa from '../../assets/visa.jpg'
import amex from '../../assets/amex.jpg'
import mastercard from '../../assets/mastercard.jpg'
import { useState } from 'react'
import Modal from './Modal'

const Form = () => {
  const [modal,setModal]=useState(false)
  const pagar=(e)=>{
    e.preventDefault()
    setModal(true)
  }
  return (
    <div className='flex w-full px-6 flex-col'>
      {modal&&ReactDOM.createPortal(<Modal/>,document.querySelector("#portal"))}
      <h1 className='text-xl text-gray-600 mt-6'>INFORMACIÓN DE PAGO</h1>
      <form>
        <div>
          <p className='text-sm'>Cédula</p>
          <input className='border w-full py-1 outline-none'
            type='number'
          />
        </div>
        <div>
          <p className='text-sm'>{'Nombre(s) y Apellido(s)'}</p>
          <input className='border w-full py-1 outline-none'
            type='text'
          />
        </div>
        <div>
          <p className='text-sm'>Celular</p>
          <input className='border w-full py-1 outline-none' 
            type='number'
          />
        </div>
        <div>
          <p className='text-sm'>Correo Electronico</p>
          <input className='border w-full py-1 outline-none' />
        </div>
        <div>
          <p className='text-sm'>Direccion de envio</p>
          <input className='border w-full py-1 outline-none' />
        </div>
        <div>
          <p className='text-sm'>Ciudad de envio</p>
          <input className='border w-full py-1 outline-none' />
        </div>
        <button onClick={(e)=>pagar(e)} className='w-full py-2 bg-green-600/90 text-white my-4 rounded-md'>
          Pagar Impuestos
        </button>
      </form>
      <div className='flex justify-center mt-4'>
        <img className='w-16 h-10' src={visa}/>
        <img className='w-16 h-10' src={mastercard}/>
        <img className='w-16 h-10' src={amex}/>
      </div>
    </div>
  )
}

export default Form