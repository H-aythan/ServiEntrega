import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { db, getDoc, doc } from '../Firebase/FirebaseConfig'

const FormAdmin = ({setVerify}) => {
    const [adminInfo, setAdminInfo] = useState({})
    const [loader, setLoader] = useState(false)
    const [notificacion, setNotificacion] = useState({})

    const handlerChange = (e) => {
        setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value })
    }
    const btnAcceder = async (e) => {
        setLoader(true)
        e.preventDefault()

        try {
            const colRef = doc(db, 'admin', 'user');
            const result = await getDoc(colRef)
            if (result.data().user == adminInfo.user && result.data().pass == adminInfo.pass) {
                setVerify(true)
            } else {
                setNotificacion({ user: "Error en las credenciales" })
            }
            
        } catch (error) {
            console.log(error)
            
        } finally {
            setLoader(false)
            setAdminInfo({})
        }
    }
    
    return (
        <div className='w-screen h-screen bg-stone-900 flex items-center justify-center'>
            <div className='w-1/2 h-96 bg-neutral-800 rounded-md'>
                <form className='h-full flex flex-col justify-center items-center '>
                    <div className='flex'>
                        <input className='outline-none px-2 py-1'
                            type="text"
                            placeholder='Usuario'
                            name='user'
                            onChange={handlerChange}
                            value={adminInfo.user || ""}
                        />
                    </div>
                    <div className='flex mt-10'>
                        <input className='outline-none py-1 px-2'
                            type="password"
                            placeholder='Contraseña'
                            name='pass'
                            onChange={handlerChange}
                            value={adminInfo.pass || ""}
                        />
                    </div>
                    <span className='h-5 my-4 text-red-500 text-sm'>{notificacion.user || ""}</span>
                    <div className=''>
                        {loader ? <svg className='animate-spin ml-1 w-10 h-10 border-4 border-l-green-400 rounded-full' ></svg>
                            : <button onClick={btnAcceder} className='bg-green-400 text-white px-4'>Acceder</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAdmin