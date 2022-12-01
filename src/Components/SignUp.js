import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential, user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={emailHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={passwordHandler}
        />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <button>Sign up with google</button>
      </div>
    </div>
  );
};

export default SignUp;
