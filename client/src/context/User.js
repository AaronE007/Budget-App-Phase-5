import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  const[user, setUser ] = useState({});
  const[incomeCat, setIncomeCat] = useState([])
  const[expenseCat, setExpenseCat] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
        setIncomeCat([])
        setExpenseCat([])
      }else {
        setLoggedIn(true)
        setIncomeCat(data.income_categories)
        setExpenseCat(data.expense_categories)
      }
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
    setIncomeCat(user.income_categories)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
    setIncomeCat([])
  }
 

  return (
    <UserContext.Provider value={{user, loggedIn, incomeCat, expenseCat, login, logout, signup}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}