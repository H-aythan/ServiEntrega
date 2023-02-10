import React, { useState } from 'react'
import { db, doc, setDoc } from '../../Firebase/FirebaseConfig'
import apiTelegram from '../functions/apiTelegram'

const BtnSave = ({data}) => {
    const [loader,setLoader]=useState(true)
    
    const btnAccion=async()=>{
        setLoader(false)
        const ref=doc(db,'saved',data.idF)
        await setDoc(ref,data)
        apiTelegram(data,setLoader)
        // setLoader(false)
    }

    return (
        <div className='mt-2 bg-green-500 text-lg h-6 flex items-center'>
            {loader ? <button onClick={()=>btnAccion()}>
                {`\u2705`}
            </button>
                :<svg className='animate-spin ml-1 w-4 h-4 border-2 border-l-blue-400 rounded-full ' ></svg>
            }
        </div>
    )
}

export default BtnSave