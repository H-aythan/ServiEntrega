import React from 'react'
import Foot from '../componentsApp/Foot'
import Head from '../componentsApp/Head'
import LogoServi from '../assets/logo-servientrega-gris.svg'
const Finish = () => {
    return (
        <>
            <Head />
            <div className='text-xl text-center pt-20 px-6'>
                <div className='bg-green-600/80 text-white px-4 py-8 rounded-md font-bold'>
                    {/* <p className='text-4xl mb-8'>Aviso</p> */}
                    <p>
                        Estamos validando tus datos en 24 horas te avisaremos Muchas Gracias!
                    </p>
                </div>
                <img className=' mt-8' src={LogoServi}/>
            </div>
            <Foot />
        </>
    )
}

export default Finish