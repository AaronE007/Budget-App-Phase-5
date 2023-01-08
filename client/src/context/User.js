import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  const[user, setUser ] = useState({});
  const[expenseCat, setExpenseCat] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
        setExpenseCat([])
      }else {
        setLoggedIn(true)
        setExpenseCat(data.expense_categories)
      }
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
    setExpenseCat(user.expense_categories)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
    setExpenseCat([])
  }
 

  return (
    <UserContext.Provider value={{user, loggedIn, expenseCat, login, logout, signup}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}