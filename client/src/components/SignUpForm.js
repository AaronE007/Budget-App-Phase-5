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