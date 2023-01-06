import React from 'react'

const ExpenseCatCard = ({expenseCategory}) => {
  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:400, color: "#db9833"}}>
    <h3>Name: {expenseCategory.name}</h3>
</div>
  )
}

export default ExpenseCatCard
