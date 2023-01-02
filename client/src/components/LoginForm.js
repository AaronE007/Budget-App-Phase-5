import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

export default LoginForm
