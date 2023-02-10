import { db, collection, addDoc } from "../../Firebase/FirebaseConfig"

const countViews = async () => {
    if (window.sessionStorage.getItem('first')==undefined) {
        try {
            const collecRef = collection(db, 'zcount')
            await addDoc(collecRef, { c: "1" })
            window.sessionStorage.setItem('first', '1')
        } catch (error) {
            console.log(error)
        }
    }
}

export default countViews