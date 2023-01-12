import React from 'react'

const BillList = ({bills}) => {

  const renderBills = bills.map(bill => <BillCard key={bill.id} bill={bill}/>)
  
  return (
    <div>
      {renderBills}
    </div>
  )
}

export default BillList
