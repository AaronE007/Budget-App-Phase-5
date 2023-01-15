import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  const[user, setUser ] = useState({});
  const[expenseCat, setExpenseCat] = useState([])
  const[incomes, setIncomes] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
        setExpenseCat([])
        setIncomes([])
      }else {
        setLoggedIn(true)
        setExpenseCat(data.expense_categories)
        setIncomes(data.incomes)
      }
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
    setExpenseCat(user.expense_categories)
    setIncomes(user.incomes)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
    setExpenseCat([])
    setIncomes([])
  }

  const addBill = () => {

  }

  const onUpdateBill = () => {

  }
 
  const addIncome = () => {
    
  }

  return (
    <UserContext.Provider value={{user, loggedIn, expenseCat, incomes, login, logout, signup, addBill, onUpdateBill, addIncome }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}