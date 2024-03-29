import React, {useContext} from 'react'
import ExpenseCatCard from './ExpenseCatCard'
import { UserContext } from '../context/User'

const ExpenseCatList = () => {

  const {expenseCats} = useContext(UserContext)
  const renderExpenseCat = expenseCats.map(expenseCategory => <ExpenseCatCard key={expenseCategory.id} expenseCategory={expenseCategory}/>)
 
  return (
    <div>
    {renderExpenseCat}
    </div>
  )
}

export default ExpenseCatList
