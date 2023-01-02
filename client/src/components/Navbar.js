import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'
import {useNavigate} from "react-router-dom"

const style = {
  width: "100%",
  magrin:"auto",
  padding: "1em",
  color: "black",
  backgroundColor: "#8ec3eb",
  fontWeight: "600",
  verticalAlign: "center",
}

const Navbar = () => {

  const {user, logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const userLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {"Content-Type": 'application/json'}
    })
    .then(() => {
      logout()
      navigate('/')
    })
  }