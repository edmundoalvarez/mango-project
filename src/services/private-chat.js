import { addDoc, collection, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "./firebase"

const privateChatRefCache = {};

export async function sendPrivateChatMessage({senderId, receiverId, message}){

    const privateChatDoc = await getPrivateChatDoc({senderId, receiverId})


    const messagesRef = collection(db, `private-chats/${privateChatDoc.id}/messages`);

    await addDoc(messagesRef, {
        senderId,
        message,
        created_at: serverTimestamp(),
    });

    return true;
}

export async function suscribeToPrivateChat({senderId, receiverId}, callback){

    const privateChatDoc = await getPrivateChatDoc({senderId, receiverId});

    const messagesRef = collection(db, `private-chats/${privateChatDoc.id}/messages`);

    const q = query(
        messagesRef,
        orderBy('created_at')
    )

    return onSnapshot(q, snapshot => {

        const messages = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                senderId: doc.data().senderId,
                message: doc.data().message,
                created_at: doc.data().created_at?.toDate(),

            }
        })

        callback(messages);
    })
     
}

async function getPrivateChatDoc({senderId, receiverId}) {

    const cacheRef = getFromCache({senderId, receiverId});
    if(cacheRef) return cacheRef;

    const privateChatRef = collection(db, "private-chats");

    const q = query(
        privateChatRef, 
        where('users', '==', {
            [senderId]: true,
            [receiverId]: true,
        }),
        limit(1),
    );
    
    const snapshot = await getDocs(q);

    let privateChatDoc;

    if(snapshot.empty){
        privateChatDoc = await addDoc(privateChatRef, {
            users: {
                [senderId]: true,
                [receiverId]: true,
            }
        })

    } else {
        privateChatDoc = snapshot.docs[0];

    }

    addToCache({senderId, receiverId}, privateChatDoc);

    return privateChatDoc;
}

function addToCache({senderId, receiverId}, value){
    const key = getKeyForCache({senderId, receiverId});

    privateChatRefCache[key] = value;
}

function getFromCache({senderId, receiverId}){
    const key = getKeyForCache({senderId, receiverId});

    return privateChatRefCache[key] || null;
}

function getKeyForCache({senderId, receiverId}){
    return senderId + receiverId;
}