import React,{ useState, useContext } from "react";
import {UserContext} from "../context/user";
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
