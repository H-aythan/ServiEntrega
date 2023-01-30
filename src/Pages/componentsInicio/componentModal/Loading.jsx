import React from 'react'
import loaderLogo from '../../../assets/loading.gif'
const Loading = () => {
    
    return (
        <div className=''>
             <div className='flex flex-col items-center py-5 w-64'>
                <img className='w-40' src={loaderLogo} />
                <p className='text-sm text-center px-4'>Estamos procesando su solicitud esperen un minuto</p>
            </div>
        </div>
    )
}

export default Loading