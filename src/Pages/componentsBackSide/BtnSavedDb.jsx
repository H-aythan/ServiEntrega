import React, { useState } from 'react'

const BtnSavedDb = () => {
    const [hideStore,setHideStore]=useState()
  return (
    <div className='bg-sky-500 text-sm' style={{zIndex:"400"}}>
        <button className='px-2 mt-1' onClick={()=>setHideStore(true)}>Store users</button>
        {hideStore&&<div className='fixed w-screen h-screen flex justify-center items-center bg-gray-700 bg-opacity-50 top-0 left-0 z-50'>
            <div className='w-4/5 bg-stone-800 h-4/5  relative'>
                <button className='bg-red-600 px-2 absolute right-2 top-2 ' onClick={()=>setHideStore(false)}>
                    <p className='text-yellow-200  h-6'>x</p>
                </button>
            </div>
        </div>}
    </div>
  )
}

export default BtnSavedDb