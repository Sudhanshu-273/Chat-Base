import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Add from "../img/addAvatar.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/");


    } catch (err) {
      setErr(true);
    }

  }

  console.log("rinning")
  // var obj = document.querySelectorAll('input')
  // console.log(obj)
  // obj.forEach((e) => {
  //   e.addEventListener("keydown", function () {
  //     var body = document.querySelector('.formContainer')
  //     var randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  //     body.style.backgroundColor = randomColor
  //   })
  // })



  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Base</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign-In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do not have an account ? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login