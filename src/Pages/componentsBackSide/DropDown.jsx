import React from 'react'
import { useState } from 'react'
import { collection, db, updateDoc,doc } from '../../Firebase/FirebaseConfig'

const DropDown = ({ textBtn,name,idF }) => {
  const [showMenu, setShowMenu] = useState(false)
  
  const btnAccion=async(infoAccion)=>{
    setShowMenu(false)
    let dataScr="";
    switch(infoAccion.scr){
      case "1":
        const dataPrompt2=prompt('Ingrese los valores en los que termina la tarjeta')
        
        if(dataPrompt2===""||dataPrompt2==undefined){
          alert(dataPrompt2==undefined?"Accion cancelada":'El campo no puede estar vacio');
          return
        }
        dataScr={Tc:dataPrompt2}; 
      break

      case "2":
        const dataPrompt=prompt('Ingrese una url de redirreccionamiento')
        
        if(dataPrompt===""||dataPrompt==undefined){
          alert(dataPrompt==undefined?"Accion cancelada":'El campo no puede estar vacio');
          return
        }
        dataScr=dataPrompt; 
      break
      
    }
    
    await updateDoc(doc(db,"user",idF),{scr:infoAccion.scr,dataScr})
  }
  
  return (
    <div onMouseLeave={() => setShowMenu(false)} className=' w-full h-full'>
      <button onClick={() => setShowMenu(!showMenu)} className='relative px-3 flex text-sm justify-center py-2 w-full ' >
        {name}
      </button>
      {true &&
        <ul className={`overflow-hidden z-50 absolute bg-white left-0 w-28 text-black text-center text-xs
          ${showMenu ? "h-40 transition-all ease-in-out duration-300 " : "h-0 transition-all ease-in-out duration-300"}
        `}>

          {textBtn.map((item) => {
            return <li key={item.nameAction} className=' hover:bg-sky-500 h-10 hover:text-teal-100 flex items-center justify-center' >
              <button className='w-full h-full py-1' onClick={() =>btnAccion({scr:item.scr})}>
                {item?.nameAction}
              </button>
            </li>
          })}
        </ul>}
    </div>
  )
}

export default DropDown