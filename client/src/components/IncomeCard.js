import React from 'react'

const IncomeCard = ({income}) => {
  
  return (
  <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:400, color: "#db9833"}}>
    <h3>Name: {income.name}</h3>
    <h4>Amount: {income.amount}</h4>
    <h4>Time Period: {income.time_period}</h4>
    <img style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 50, width:50, color: "#db9833"}} src={income.image_url} alt="income picture" />
  </div>
  )
}

export default IncomeCard


