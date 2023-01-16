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
 
  const addIncome = (income) => {
    fetch('/incomes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(income)
    })
    .then(res => res.json())
    .then(data => {
      setIncomes([...incomes, data])
    })
  }

  function onDeleteUserBill(id) {
    // const updatedStocks = stocks.filter((stock) => stock.id !== id);
    // setStocks(updatedStocks);
  }

  const deleteUserBill = (id) => {
    fetch(`user_bills/${id}`, {
      method: "DELETE",
    });
    onDeleteUserBill(id)
  } 

  return (
    <UserContext.Provider value={{user, loggedIn, expenseCat, incomes, login, logout, signup, addBill, onUpdateBill, addIncome, deleteUserBill }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}