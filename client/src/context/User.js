import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  const[user, setUser ] = useState({});
  const[expenseCats, setExpenseCats] = useState([])
  const[incomes, setIncomes] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [billsAmount, setBillsAmount] = useState(0)
  const [incomesAmount, setIncomesAmount] = useState(0)

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
        setBillsAmount(data.bills_total)
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

  const billTotal = () => {
    let bills = expenseCats.map((expCat) => { 
      return expCat.user_bills.map((bill) => {
        return parseInt(bill.amount)
      })
    }).flat()

    let sum = bills.reduce(sumAmount, 0)
    setBillsAmount(sum)
  }

  const sumAmount = (total, amount) => {
    return total + amount;
  }

  const incomeTotal = () => {
    let sum = incomes.map(income => parseInt(income.amount)).reduce(sumAmount, 0)
    setIncomesAmount(sum)
  }

  useEffect(() => {
    incomeTotal()
    billTotal()
  }, [expenseCats, incomes]);

  const addBill = (expCat) => {
    let oldExpCat = expenseCats.find(cat => {
      return cat.id === expCat.id})
    if (!oldExpCat) {
      setExpenseCats([...expenseCats, expCat])
    }
    else {
      let updatedState = [];
      expenseCats.forEach((expenseCategory) => {
        if (expenseCategory.id === expCat.id) {
          updatedState.push(expCat)
        }
        else {
          updatedState.push(expenseCategory)
        }
      })
      setExpenseCats(updatedState)
    }  
  }

 
  const onUpdateBill = (expCat) => {
    let oldExpCat = expenseCats.find(cat => {
      return cat.id === expCat.id})
    if (!oldExpCat) {
      setExpenseCats([...expenseCats, expCat])
    }
    else {
      let updatedState = [];
      expenseCats.forEach((expenseCategory) => {
        if (expenseCategory.id === expCat.id) {
          updatedState.push(expCat)
        }
        else {
          updatedState.push(expenseCategory)
        }
      })
      setExpenseCats(updatedState)
    }  
  }



  const addIncome = (income) => {
    const incomeData = new FormData()
    incomeData.append("income[name]", income.name)
    incomeData.append("income[amount]", income.amount)
    incomeData.append("income[time_period]", income.time_period)
    incomeData.append("income[image]", income.image.files[0], income.image.value )

    fetch('/incomes', {
      method: 'POST',
      body: incomeData
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
    <UserContext.Provider value={{user, loggedIn, expenseCats, incomes, billsAmount, incomesAmount, login, logout, signup, addBill, onUpdateBill, addIncome, deleteUserBill }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}