import React,{ useState, useContext } from "react";
import {UserContext} from "../context/User";
import {useNavigate} from "react-router-dom"

const SignUpForm = () => {
  const {signup} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

function handleSubmit(e) {
  e.preventDefault();
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"},
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password,
          password_confirmation:  passwordConfirmation,
          bio: bio
        }
      })
    })
    .then(res => res.json())
    .then(user => {
      if (!user.errors) {
        signup(user)
        navigate('/')
      } else {
        const errorsList = user.errors.map(e => <li>{e}</li>)
        setErrors(errorsList)
      }
    } )
  }

  return (
    <div>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "#8ec3eb" , height: 300, width: 400, color: "#2a6592"}}>
      <label>Username: </label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <br/>
      <label>Email: </label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <br/>
        <br/>
      <label>Password: </label>
      <input type="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br/>
        <br/>
        <label>Password Confirm: </label>
        <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" id="password_confirmation" value={passwordConfirmation}  required/>
        <br/>
        <br/>
      <label>Bio: </label>
      <input type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required/>
        <br/>
        <br/>
      <input type="submit" value="Add User" />
    </form>
      <ul>
    {errors}
    </ul>
  </div>
  )
}

export default SignUpForm