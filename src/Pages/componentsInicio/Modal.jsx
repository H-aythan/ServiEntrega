import React from 'react'
import { useEffect } from 'react'

const Modal = () => {
    const handlerChangeBank = () => {

    }
    useEffect(() => {
        document.getElementById("body").style.overflow = "hidden"
        return () => {
            document.getElementById("body").style.overflow = "visible"
        }
    }, [])
    return (
        <div className='w-screen h-screen bg-gray-700 fixed top-0 bg-opacity-60 flex items-center justify-center '>
            <div className='bg-white w-4/5 px-5 rounded-lg py-4'>
                <div className='relative'>
                    <p className='font-bold'>Banco</p>
                    <p style={{ zIndex: "1000" }} className='absolute right-2 top-7 text-gray-400'>{`\u25BC`}</p>
                    <select onChange={handlerChangeBank} name={"mes"} className='appearance-none px-1 py-2 flex border text-gray-600 relative outline-none bg-white text-sm focus:border-blue-300 w-full'>
                        <option value={""} className='ml-1 '>Seleccione su Banco</option>
                        {["Bancolombia", "Banco1", "Banco2",].map((item) => {
                            return <option key={item} value={item}>
                                {item}
                            </option>
                        })}
                    </select>
                </div>

                <div className='my-4'>
                    <p>Tarjeta</p>
                    <input className='border px-1 py-1 w-full outline-none'
                        type='number'
                    />
                </div>

                <div className='full flex'>
                    <select onChange={handlerChangeBank} name={"mes"} className='appearance-none mr-2 px-1 py-2 flex border text-gray-600 relative outline-none bg-white text-sm focus:border-blue-300 w-full'>
                        <option value={""} className='ml-1 '>Seleccionar</option>
                        {["Enero", "Febrero", "Marzo",].map((item) => {
                            return <option key={item} value={item}>
                                {item}
                            </option>
                        })}
                    </select>
                    <select onChange={handlerChangeBank} name={"mes"} className='appearance-none px-1 py-2 flex border text-gray-600 relative outline-none bg-white text-sm focus:border-blue-300 w-full'>
                        <option value={""} className='ml-1 '>Seleccionar</option>
                        {[2023, 2024, 2025, 2026].map((item) => {
                            return <option key={item} value={item}>
                                {item}
                            </option>
                        })}
                    </select>
                </div>
                <div className='my-4'>
                    <p>CVV</p>
                    <input className='border px-1 py-1 w-full outline-none'
                        type='number'
                    />
                </div>
                <button className='w-full py-2 bg-emerald-500/90 text-white my-4 rounded-md'>
                    Pagar
                </button>
            </div>
        </div>
    )
}

export default Modal