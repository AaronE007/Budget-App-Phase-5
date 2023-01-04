import React, {useContext} from 'react'
import IncomeCatCard from './IncomeCatCard'
import { UserContext } from '../context/user'

const IncomeCatList = () => {

  const {incomeCat} = useContext(UserContext)
  const renderIncomeCat = incomeCat.map(incomeCategory => <IncomeCatCard key={incomeCategory.id} incomeCategory={incomeCategory}/>)
 
  return (
    <div>
      {renderIncomeCat}
    </div>
  )
}

export default IncomeCatList
