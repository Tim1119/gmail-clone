import gmail_logo from "../assets/gmail.png"
import { auth,provider } from "../firebase"
import {  signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/UserContext"
const LoginPage = () => {
  const navigate  = useNavigate()
    const {setUser} = UserAuth()
  const SignInWithGoogle = ()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
           
            const newUser = {
                fullName:result.user.displayName,
                email:result.user.email,
                photoURL:result.user.photoURL
            }
            setUser(newUser)
            localStorage.setItem('gmail-user',JSON.stringify(newUser))
            navigate('/mail/inbox')
        })
    } 
  return (
    <div className="flex flex-col items-center justify-center" >
        <img className="w-80" src={gmail_logo} alt='gmail-logo' />
        <button className="px-5 py-2 bg-blue-400 rounded-md font-medium text-white" onClick={SignInWithGoogle} >Login to Account</button>
    </div>
  )
}

export default LoginPage