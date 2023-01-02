import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  const[user, setUser ] = useState({});
  const[loggeddIn, setLoggedIn] = useState([])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
      }else {
        setLoggedIn(true)
      }
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
   
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
  }
 

  return (
    <UserContext.Provider value={{user, loggeddIn, login, logout, signup}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}