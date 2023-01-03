import React, {useContext} from 'react'
import IncomeCatCard from './IncomeCatCard'
import { UserContext } from '../context/user'

const IncomeCatList = () => {

    const {incomeCategories} = useContext(UserContext)

    const renderIncomeCat = incomeCategories.map(incomeCategory => <IncomeCatCard key={incomeCategory.id} incomeCategory={incomeCategory}/>)
  return (
    <div>
      {renderIncomeCat}
    </div>
  )
}

export default IncomeCatList
