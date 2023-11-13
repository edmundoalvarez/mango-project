import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";


export async function getAllServices(){
    const refServices = collection(db, 'services');
    const docSnapshot = await getDocs(refServices);

    return docSnapshot.docs.map(doc => {
        return {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            cat: doc.data().cat,
            price: doc.data().price,
        }
    })
}

export async function createService(data) {

    const refService = await addDoc(collection(db, "services"), data);

    console.log(data, refService)


}

export async function deleteService(id) {

    console.log('borrando')
    await deleteDoc(doc(db, "services", id));

}

export async function updateService(id, data) {

    console.log('actualizando...')
    const refService = doc(db, "services", id);
    
    await updateDoc(refService, data);

}

export async function getServiceById(id) { 
    const refService = doc(db, `services/${id}`);
    const docSnapshot = await getDoc(refService);

    return {
        id: docSnapshot.id,
        title: docSnapshot.data().title,
        description: docSnapshot.data().description,
        price: docSnapshot.data().price,
        cat: docSnapshot.data().cat,
    }
}

