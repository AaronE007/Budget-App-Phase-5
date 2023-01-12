import React from 'react'

const BillList = ({bills}) => {

  const renderBills = bills.map(bill => <BillCard key={bill.id} expenseCategory={expenseCategory}/>)
  
  return (
    <div>
      {renderBills}
    </div>
  )
}

export default BillList
