import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/index"

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in here</button>
    </div>
  )
}

export default SignIn
