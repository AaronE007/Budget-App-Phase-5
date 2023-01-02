import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
   })
    .then(res => res.json())
    .then(user => {
      if (!user.errors) {
        login(user)
        navigate('/')
      } else {
        const errorsList = user.errors.map(e => <li>{e}</li>)
        setErrors(errorsList)
      }
     })
  
    }

export default LoginForm
