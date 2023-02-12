import { db,doc,increment, updateDoc } from "../../Firebase/FirebaseConfig"

const countViews = async () => {
    if (window.sessionStorage.getItem('first')==undefined) {
        try {      
            // const collecRef=collection(db,'zcount')
            await updateDoc(doc(db,"views","count"),{views:increment(1)})
            window.sessionStorage.setItem('first','exist')
       } catch (error) {
            console.log(error)
        }
    }
}

export default countViews