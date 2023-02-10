import React, { useEffect, useState } from 'react'

const ActiveSound = ({ setAudio, audio,notificacionNewUser }) => {
    
    const btnAction = (type) => {
        if (type == "activar") {
            setAudio(true)

        } else {
            setAudio(false)
        }
    }

    return (
        <div>
            {audio ? <button className='bg-red-600 w-32 py-1 text-sm' onClick={() => btnAction()}>
                Desactivar sonido
            </button>
                : <button className='bg-green-600 w-32 py-1 text-sm' onClick={() => btnAction("activar")}>
                    Activar sonido
                </button>
            }
        </div>
    )
}

export default ActiveSound