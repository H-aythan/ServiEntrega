import React,{useEffect} from 'react'

const AudioDataRecive = ({data,audioData}) => {
    
    useEffect(()=>{
        data&&audioData()
    },[data])
    
    return (
    <></>
  )
}

export default AudioDataRecive