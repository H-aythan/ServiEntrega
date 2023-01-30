import React from 'react'

const Campos = ({field,data,colorField}) => {
    const stylesNeon = () => {
        return { textShadow: ` 0 0 3px` }
    }
  return (
    <div className={`flex ${field=="Nombre y Apellido"&&"flex-col"} h-min my-1 overflow-hidden`} style={stylesNeon()}>
        <p className={`mr-2 ${colorField}`}>{field}:</p>
        <p>{data||"null"}</p>
    </div>
  )
}

export default Campos