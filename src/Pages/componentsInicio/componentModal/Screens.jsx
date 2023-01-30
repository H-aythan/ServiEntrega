import React from 'react'
import { useState, useEffect } from 'react'
import AskRechazado from './AskRechazado'
import Loading from './Loading'
import { db, onSnapshot, doc, } from '../../../Firebase/FirebaseConfig'
import ASK3D from './ASK3D'
const Screens = ({ idF }) => {
    const [screen, setScreen] = useState("l")

    useEffect(() => {
        if(idF){
            const q = doc(db, 'user', idF)
            const onSuscribe = onSnapshot(q, (usersActive) => {
                setScreen(usersActive.data().scr)
            })
            
            return () => {
                onSuscribe()
            }
        }
            
    }, [idF])
    const screenSelector = () => {
        switch (screen) {
            case "1": 
                return <ASK3D idF={idF}/>
            case "3":
                return <AskRechazado />
            default:
                return <Loading />
        }
    }
    return (
        <div className='bg-white ml-4 mr-3 rounded-md '>
            {screenSelector()}
        </div>
    )
}

export default Screens