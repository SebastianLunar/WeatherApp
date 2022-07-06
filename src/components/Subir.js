// import { addDoc, collection } from 'firebase/firestore';
// import React from 'react';
// import { database } from '../firebase/firebaseConfig';
// import arreglo from './Senddata'

// const Subir = () => {
//     const data = arreglo.badges 
//     const enviar = (data) => {
//         data.forEach(element => {
//             const {id, name, description, image} = element

//             const cargar = {
//                 id, name, description, image
//             }
        
//             addDoc(collection(database, "badges"), cargar)
//         });
//     }
//     enviar(data)

//     return (
//         <div>
//             Subiendo data
//         </div>
//     );
// };

// export default Subir;