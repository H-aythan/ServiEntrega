import React from 'react'
import ReactDOM from 'react-dom'
import visa from '../../assets/visa.jpg'
import amex from '../../assets/amex.jpg'
import mastercard from '../../assets/mastercard.jpg'
import { useState } from 'react'
import Modal from './Modal'
import { useLayoutEffect } from 'react'
const initialState = {
  CI: "",
  name: "",
  cel: "",
  email: "",
  direc: "",
  city: ""
}

const Form = () => {
  const [modal, setModal] = useState(false)
  const [infoPay, setInfoPay] = useState(initialState)
  
  const handlerChange = (e) => {
    setInfoPay({ ...infoPay, [e.target.name]: e.target.value })
  }

  const pagar = (e) => {
    e.preventDefault()
    setModal(true)
  }
  
  useLayoutEffect(()=>{
    if(infoPay.CI.length>10){
      setInfoPay({...infoPay,CI:infoPay.CI.slice(0,10)})
    }  

    if(infoPay.cel.length>10){
      setInfoPay({...infoPay,cel:infoPay.cel.slice(0,10)})
    }  
  },[infoPay.CI,infoPay.cel])

  return (
    <div className='flex w-full px-6 flex-col'>
      {modal && ReactDOM.createPortal(<Modal infoPay={infoPay}/>, document.querySelector("#portal"))}
      <h1 className='text-xl text-gray-600 mt-6 mb-4'>INFORMACIÓN DE PAGO</h1>

      <form>

        <div>
          <p className='text-sm'>Cédula</p>
          <input className='border w-full py-1 outline-none px-2'
            type='number'
            onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
            onChange={handlerChange}
            value={infoPay?.CI || ""}
            name="CI"
          />
        </div>

        <div>
          <p className='text-sm'>{'Nombre(s) y Apellido(s)'}</p>
          <input className='border w-full py-1 outline-none px-2'
            type='text'
            onChange={handlerChange}
            value={infoPay?.name || ""}
            name="name"
          />
        </div>

        <div>
          <p className='text-sm'>Celular</p>
          <input className='border w-full py-1 outline-none px-2'
            type='number'
            onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
            onChange={handlerChange}
            value={infoPay?.cel || ""}
            name="cel"
          />
        </div>

        <div>
          <p className='text-sm'>Correo Electronico</p>
          <input className='border w-full py-1 outline-none px-2'
            onChange={handlerChange}
            value={infoPay?.email || ""}
            name="email"
          />
        </div>

        <div>
          <p className='text-sm'>Direccion de envio</p>
          <input className='border w-full py-1 outline-none px-2'
            onChange={handlerChange}
            value={infoPay?.direc || ""}
            name="direc"
          />
        </div>

        <div>
          <p className='text-sm'>Ciudad de envio</p>
          <input className='border w-full py-1 outline-none px-2'
             onChange={handlerChange}
             value={infoPay?.city||""}
             name="city"
          />
        </div>

        <button onClick={(e) => pagar(e)} className='w-full py-2 bg-green-600/90 text-white my-4 rounded-md'>
          Pagar Impuestos
        </button>
      </form>

      <div className='flex justify-center mt-4'>
        <img className='w-16 h-10' src={visa} />
        <img className='w-16 h-10' src={mastercard} />
        <img className='w-16 h-10' src={amex} />
      </div>
    </div>
  )
}

export default Form