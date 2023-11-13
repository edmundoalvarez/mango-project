import { collection, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";


export async function getUserProfileById(id) { 
    const refUser = doc(db, `users/${id}`);
    const docSnapshot = await getDoc(refUser);

    return {
        id: docSnapshot.id,
        email: docSnapshot.data().email,
        username: docSnapshot.data().username,
        rol: docSnapshot.data().rol,
    }
}

export async function getAllUsers(){
    const refUsers = collection(db, 'users');
    const docSnapshot = await getDocs(refUsers);

    return docSnapshot.docs.map(doc => {
        return {
            id: doc.id,
            email: doc.data().email,
            username: doc.data().username,
            rol: doc.data().rol,
        }
    })
}

export async function createUserProfile(id, data) {
    const refUser = doc(db, `users/${id}`);
    return setDoc(refUser, {...data, created_at: serverTimestamp()});
}

export async function updateUser(id, data) {

    const refUser = doc(db, "users", id);
    
    await updateDoc(refUser, data);

}