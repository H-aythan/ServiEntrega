import {useEffect} from 'react'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useState } from 'react'
const UserPresence = ({id}) => {
    const [presence,setPresence]=useState()
    const [aux,setAux]=useState(false)
    useEffect(() => {
        const db3 = getDatabase();
        const timerAux=setTimeout(()=>{
            setAux(!aux)
        },1000)
        return ()=>{onValue(ref(db3, 'users/'+id), (snapshot) => {
        
            snapshot.val()==null
                ?setPresence(false)
                :setPresence(true)
        })
        clearTimeout(timerAux)
    }

    }, [presence,aux])
    
    return (
    <div className='text-xs flex mt-1'>
        <p className='mr-2 text-white'>Status:</p> 
        {presence?<div className='text-green-500 flex items-center'>Online<div className=' ml-1 w-2 h-2 mt-0.5 bg-green-500 rounded-full'></div></div>
            :<div className='text-red-500 flex items-center'>Offline<div className=' ml-1 w-2 h-2 mt-0.5 bg-red-500 rounded-full'></div></div>
        }
    </div>
  )
}

export default UserPresence