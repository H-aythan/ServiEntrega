import React from 'react'
import audifono from '../assets/audifono.svg'

const Foot = () => {
    return (
        <div className='border-t mt-14 pt-5'>
            <div className=' px-5 flex relative flex-wrap'>
                <div className='border-t-2 w-9 border-green-500 absolute'></div>
                <div className='mr-4 flex mt-4 my-5'>
                    <img className='w-9' src={audifono} />
                    <div>
                        <p className='text-sm text-gray-600'>Comunicate con nuestra</p>
                        <p className='text-sm text-green-600 font-bold'>{`(601) 7700 200`}</p>
                    </div>
                </div>
                <div className='flex justify-between w-full mb-5'>
                    <p className='text-green-600'>Sobre Servientrega</p>
                    <div className='w-3 h-1 bg-green-600'></div>
                </div>
            </div>
        </div>
    )
}

export default Foot