import React,{ useContext } from "react";
import BillForm from '../components/BillForm'
import ExpenseCatList from '../components/ExpenseCatList'
import { UserContext } from '../context/User'


const ExpenseCatCont = () => {

  const {billsAmount} = useContext(UserContext)



  return (
    <div>
      <h3>Add Bills Here</h3>
      <BillForm />
      <br/>
      <br/>
      <h2>Expense Categories</h2>
      <ExpenseCatList /> 
      <h3>Bills Totaled</h3> 
      {billsAmount}
    </div>
  )
}

export default ExpenseCatCont
