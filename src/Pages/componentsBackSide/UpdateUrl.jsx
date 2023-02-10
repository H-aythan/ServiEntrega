import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { db ,doc,getDoc,collection,updateDoc} from '../../Firebase/FirebaseConfig'

const UpdateUrl = () => {
    const [id,setId]=useState()

    const getItems = async () => {
        const colRef = doc(db, 'url', 'url-id');
        const result = await getDoc(colRef)
        
        if(result.exists()){
            // if(result.data().tok&&result.data().cId){
            //     window.sessionStorage.setItem('tok', result.data().tok)
            //     window.sessionStorage.setItem('id',result.data().cId)
            // }
            setId(result.data())
        }
        
    }

    const btnAccion = async() => {
        const res=prompt('Ingrese la nueva URL. Actual: '+id.uri);
        if(res==""||res==undefined){
            res==""?alert('El campo no puede quedar vacio')
                :alert('Accion cancelada')
            return
        }
        
        const colRef = collection(db, "url");
        await updateDoc(doc(colRef, 'url-id'), { uri: res })
        setId({uri:res})
    }

    useEffect(()=>{
        getItems()
    },[])

    return (
        <div className=''>
            <button onClick={()=>btnAccion()} className='bg-yellow-500 px-3 text-sm py-0.5'>Actualizar ID</button>
        </div>
    )
}

export default UpdateUrl