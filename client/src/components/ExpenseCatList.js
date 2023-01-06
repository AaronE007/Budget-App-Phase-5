import React from 'react'
impor

const ExpenseCatList = () => {

  const {expenseCat} = useContext(UserContext)
  const renderExpenseCat = incomeCat.map(incomeCategory => <IncomeCatCard key={incomeCategory.id} incomeCategory={incomeCategory}/>)
 
  return (
    <div>
    {renderExpenseCat}
    </div>
  )
}

export default ExpenseCatList
