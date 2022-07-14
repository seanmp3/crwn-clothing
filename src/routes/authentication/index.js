import SignInForm from "../../components/signInForm/index"
import SignUpForm from "../../components/signUpForm/index"

import "../../styles/authentication.scss"

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
