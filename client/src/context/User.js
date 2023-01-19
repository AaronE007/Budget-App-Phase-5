import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  const[user, setUser ] = useState({});
  const[expenseCats, setExpenseCats] = useState([])
  const[incomes, setIncomes] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data) 
        if (data.error) {
        setLoggedIn(false)
        setExpenseCats([])
        setIncomes([])
      }else {
        setLoggedIn(true)
        setExpenseCats(data.expense_categories)
        setIncomes(data.incomes)
      }
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
    setExpenseCats(user.expense_categories)
    setIncomes(user.incomes)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
    setExpenseCats([])
    setIncomes([])
  }

  const addBill = (userbill) => {

    const updatedState = expenseCats.map((expenseCategory) => {
      return modifyExpenseCat(expenseCategory, userbill)
    })
    setExpenseCats(updatedState)
  }

  const modifyExpenseCat = (expenseCat, userbill) => {
    if(checkExpenseCategory(expenseCat, userbill)){
      let userbills = expenseCat.userbills
      userbills.push(userbill)
      const newExpCat = Object.assign(expenseCat,{"user_bills": userbills})
      return newExpCat
    } 
    else {
      return expenseCat
    }
  }


  function checkExpenseCategory(expenseCategory, userbill) {
    return expenseCategory.id === userbill.expense_category_id
  }

  // const checkCompanyExists = (stock) => {
  //   return companies.some((company) => { 
  //    return company.name === stock.company.name
  //   })
    
  // }

  const onUpdateBill = () => {

  }

  // function onUpdateStock(updatedStock) {
  //   const stocksUpdated = stocks.map((stock) => {
  //     if (stock.id === updatedStock.id) {
  //       return updatedStock;
  //     } else {
  //       return stock;
  //     }
  //   });
  //   setStocks(stocksUpdated);
  // }
 
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
    const updatedState = expenseCats.map((expenseCategory) => {
        return filteredExpenseCat(expenseCategory, id)
      })
    setExpenseCats(updatedState)
  }

  const filteredExpenseCat = (expenseCategory, userBillId) => {
    let userBills = expenseCategory["user_bills"].filter((userBill) => {
      return userBill["id"] !== userBillId
     })
   const newExpenseCats = Object.assign(expenseCategory, {"user_bills": userBills})
   return newExpenseCats
  }

  const deleteUserBill = (id) => {
    fetch(`user_bills/${id}`, {
      method: "DELETE",
    });
    onDeleteUserBill(id)
  } 

  return (
    <UserContext.Provider value={{user, loggedIn, expenseCats, incomes, login, logout, signup, addBill, onUpdateBill, addIncome, deleteUserBill }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}