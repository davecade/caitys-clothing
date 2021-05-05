import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9GKld6mJyCTxNyE7fS927EY3Oh6Fl_mI",
    authDomain: "crown-db-644b4.firebaseapp.com",
    projectId: "crown-db-644b4",
    storageBucket: "crown-db-644b4.appspot.com",
    messagingSenderId: "497746730639",
    appId: "1:497746730639:web:711883aa14e746b22c9afa",
    measurementId: "G-YRB1CGX5RY"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // -- checking if we have any data on the user that logged in
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    // -- Snapshot of the user database
    const snapShot = await userRef.get();

    // -- if the snapshot of user doesnt exist, then we need to create new user
    if(!snapShot.exists) {
        
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// -- Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;