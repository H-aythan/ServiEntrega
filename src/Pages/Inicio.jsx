import React from 'react'
import { useState } from 'react'
import Formulario from './componentsInicio/Formulario'

const Inicio = () => {
    const [next, setNext] = useState(false)
    const btnConsulta = (e) => {
        e.preventDefault()
        setNext(true)
    }
    return (
        <>
            {next?<Formulario />
            :<div className='flex justify-center bg-neutral-200/70 relative'>
                <div className='w-72 leading-5 mt-16'>
                    <h1 className='font-bold text-xl text-gray-700/90  '>Mundo de Soluciones</h1>
                    <p className='text-gray-700'>
                        {`Transporte, entrega y logística fisica o digital para ti o tu empresa a tiempo`}
                    </p>
                    <div className='h-40 my-28'></div>{/*  espacio para la card */}

                    <div style={{ zIndex: "1000" }} className='bg-white border-2 rounded-md overflow-hidden absolute w-4/5 -bottom-8 flex flex-col'>
                        <div className=' flex justify-center flex-wrap py-3 px-3'>
                            <h1 className='text-xm font-bold text-gray-700/90 py-3'>CONSULTA ENVIO PENDIENTE</h1>
                            <p className='text-justify'>Ingrese su documento de identidad para ver el estado de su paquete, luego presiona el botón
                                <span className='font-bold ml-1'>consultar</span>, Deberá realizar el pago de impuesto para que el paquete sea liberado y entregado a la dirección de residencia
                            </p>
                        </div>
                        <p className='px-3  my-2'>El valor a pagar es de $6.200 COP</p>
                        <form className='px-3'>
                            <input className='border px-2 py-2 text-sm w-full outline-none'
                                type="number"
                                placeholder='Ingrese su Cédula de Ciudadanía'
                            />
                            <p style={{ fontSize: "10px" }} className=''>* solo aplica para pagos con <span className='font-semibold'>Tarjetas de Crédito</span></p>

                            <button onClick={(e) => btnConsulta(e)}
                                className='w-full py-2 bg-green-600/90 text-white my-4 rounded-md'
                            >
                                Consultar
                            </button>
                        </form>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Inicio