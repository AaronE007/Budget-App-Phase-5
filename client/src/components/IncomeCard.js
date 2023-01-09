import React from 'react'

const IncomeCard = ({income}) => {
  
  return (
  <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:400, color: "#db9833"}}>
    <h3>Name: {income.name}</h3>
    <h4>Amount: {income.amount}</h4>
    <h4>Timer Period: {income.time_period}</h4>
  </div>
  )
}

export default IncomeCard


