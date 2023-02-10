import React from 'react'
import rechazoLogo from '../../../assets/rechazo.png'

const AskRechazado = ({setActiveScreen}) => {
    return (
        <div className='px-4 w-full flex flex-col items-center py-5'>
            <div className='flex flex-col items-center'>
                <h4 className='text-2xl'>PAGO RECHAZADO</h4>
                <img className='w-32' src={rechazoLogo} />
            </div>
            <div className='leading-4 text-sm text-justify mb-6'>
                <p className='mb-4'>Si estás intentando hacer pagos para los impuestos de
                    tu paquete de Servientrega con una tarjeta de débito / crédito
                    Que inicia con <span className='font-semibold'>530691</span> deberás ingresar una tarjeta diferente.
                </p>
                <p>No aceptamos este tipo de tarjetas</p>
            </div>
            <div className='flex flex-wrap justify-center text-white'>
                <button className='bg-green-600 w-full py-1 mb-1' onClick={() => setActiveScreen(false)}>Intentar con otra tarjeta</button>
                <button className='bg-red-600 w-full py-1'>Cancelar pago de impuestos</button>
            </div>
        </div>
    )
}

export default AskRechazado