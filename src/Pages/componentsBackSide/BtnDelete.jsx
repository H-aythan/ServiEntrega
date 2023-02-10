import React from 'react'
import { collection, db ,deleteDoc,doc} from '../../Firebase/FirebaseConfig';

const BtnDelete = ({idF}) => {

    const deleteUser = async () => {
        const colRef = collection(db, 'user');
        await deleteDoc(doc(colRef, idF));
        
    }

  return (
      <button onClick={()=>deleteUser()} className='w-6 h-6 text-white bg-red-600'>X</button>
      )
}

export default BtnDelete