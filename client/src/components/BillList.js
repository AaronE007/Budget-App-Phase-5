import React from 'react'
import BillCard from './BillCard'

const BillList = ({bills}) => {

  const renderBills = bills.map(bill => <BillCard key={bill.id} bill={bill}/>)
  
  return (
    <div>
      {renderBills}
    </div>
  )
}

export default BillList
