import React from 'react'
import BillForm from '../components/BillForm'
import ExpenseCatList from '../components/ExpenseCatList'

const ExpenseCatCont = () => {
  return (
    <div>
      <h3>Add Bills Here</h3>
      <BillForm />
      <br/>
      <br/>
      <h2>Expense Categories</h2>
      <ExpenseCatList />  
    </div>
  )
}

export default ExpenseCatCont
