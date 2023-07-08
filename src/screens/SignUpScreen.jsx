import React, { useRef } from "react";
import './SignUpScreen.css';
import { auth,createUser,setPersistence,signinUser } from "../firebase";
import { browserSessionPersistence } from "firebase/auth";


function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register =(e)=>{
    e.preventDefault();

    createUser(auth,emailRef.current.value,passwordRef.current.value).then((authUser)=>{
      console.log(authUser);
    }).catch((error)=>{alert(error.message)});
  };

  const signIn = (e) => {
    e.preventDefault();

    setPersistence(auth,browserSessionPersistence).then(()=>{
      return signinUser(auth,emailRef.current.value,passwordRef.current.value).then((authUser)=>{
        console.log(authUser);
      })
      .catch((error)=>alert(error.message));
    }).catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error)
    });

    // signinUser(auth,emailRef.current.value,passwordRef.current.value).then((authUser)=>{
    //   console.log(authUser);
    // })
    // .catch((error)=>alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form >
        <h1>Sign In</h1>
        <input ref={emailRef}  type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn} >Sign In</button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span  className="signupScreen_link" onClick={register}> Sign Up now.</span></h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
