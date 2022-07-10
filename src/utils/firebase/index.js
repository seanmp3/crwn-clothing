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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
}
