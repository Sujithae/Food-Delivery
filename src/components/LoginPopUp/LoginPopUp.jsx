import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopUp.css'

const LoginPopUp = ({setShowLogin}) => {

    const [currState,setCurrstate] = useState("Sing Up")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>: <input type="text" placeholder='Your name' required />}
               
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sing Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="Checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>

            </div>
            {currState==="Login"
            ?<p>Create a new account ? <span onClick={()=> setCurrstate("Sign Up")}> Click here </span></p>
            :<p>Already have an account ? <span onClick={()=> setCurrstate("Login")}>Login here</span></p>
            }
            
            
        </form>
      
    </div>
  )
}

export default LoginPopUp
