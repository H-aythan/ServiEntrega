import React, { useEffect, useState } from 'react'
import { db,doc, getDoc } from '../../Firebase/FirebaseConfig'

const CountViews = () => {
    const [count, setCount] = useState(0)
    const [refresh, setRefresh] = useState(false)

    const contadorServer = async () => {
        const data = await getDoc(doc(db,"views", 'count'));
        setCount(data.data().views)
    }

    useEffect(() => {
        contadorServer()
    }, [refresh])

    return (
        <div className='w-full flex justify-center text-xs mt-1 items-center'>
            <button className='mr-2 px-2 py-0.5 bg-blue-600 outline-none' onClick={() => setRefresh(!refresh)}>Refresh</button>
            <p className='mr-1'>Visitas:</p>
            <p>{count||0}</p>
        </div>
    )
}

export default CountViews