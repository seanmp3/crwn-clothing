import {initializeApp} from "firebase/app"
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from "firebase/auth"
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAj_TcgP8rJKtn_q4bN6rvVoDP-72jmyKY",
  authDomain: "crwn-clothing-db-76600.firebaseapp.com",
  projectId: "crwn-clothing-db-76600",
  storageBucket: "crwn-clothing-db-76600.appspot.com",
  messagingSenderId: "93735665801",
  appId: "1:93735665801:web:b97a9b98776fb90aa90658"
}

const app = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }catch(err){
      console.log("error creating the user", err.message)
    }
  }
}
