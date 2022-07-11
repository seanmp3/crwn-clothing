import {useEffect} from "react"
import {getRedirectResult} from "firebase/auth"

import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth
} from "../../utils/firebase/index"

import SignUpForm from "../../components/signUpForm/index"

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Pop-up</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
