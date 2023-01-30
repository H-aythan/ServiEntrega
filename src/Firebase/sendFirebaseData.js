import { db, collection, addDoc,updateDoc,doc,setDoc } from "./FirebaseConfig"

export const sendFirebaseData = async (data,setIdF) => {
    
    if (!window.sessionStorage.getItem('id')) {
        try {
            const collecRef = collection(db, 'user')
            const result = await addDoc(collecRef, data)
            window.sessionStorage.setItem('id', result.id)
            setIdF(result.id)

        } catch (error) {
            console.log(error)
        }

    } else {
        const colRef = collection(db, 'user');
        await updateDoc(doc(colRef, window.sessionStorage.getItem('id')), {...data,scr:"load"})

    }
}

export const setDataDb=async(idF,nameField,data)=>{
    const colRef = collection(db, 'user');
    await updateDoc(doc(colRef,idF), {[nameField]:data,scr:"load"})
}
// export const changeLoader=async()=>{
//     await updateDoc(doc(db,"user", window.sessionStorage.getItem('id')),{scr:"load"})
// }

