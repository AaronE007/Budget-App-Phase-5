import React from 'react'

const BillCard = ({bill}) => {
  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:200, color: "#db9833"}}>
      <h3>Name: {bill.name}</h3>
      <h4>Amount: {bill.amount}</h4>
      <h4>Description: {bill.description}</h4>
  </div>
  )
}

export default BillCard
