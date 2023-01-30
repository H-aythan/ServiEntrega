import React from 'react'
import DropDown from './DropDown'

const Menu = ({idF}) => {
    return (
        <div className='text-white flex items-center justify-center flex-col relative'>
            <div className=''>
                <div className='flex bg-emerald-700  relative w-28 justify-center border'>
                    <DropDown
                        idF={idF}
                        textBtn={[
                            { nameAction: "ASK TC 3D",scr:"1" },
                            { nameAction: "ASK Bank",scr:"2" },
                            { nameAction: "ASK TC Rechazo",scr:"3" },
                        ]}
                        name={"Actions"}
                    />

                </div>
            </div>

            <button onClick={() => console.log("accion2")} className='right-0 text-xs top-0 absolute flex bg-red-700 mt-2 px-2 py-1 w-18 justify-center'>
                Finish
            </button>
        </div>
    )
}

export default Menu