import React, {useContext} from 'react'
import { UserContext } from '../context/User'
import IncomeCard from './IncomeCard'

const IncomesList = () => {

  const {incomes} = useContext(UserContext)
  const renderIncomes = incomes.map(income => <IncomeCard key={income.id} income={income}/>)
 


  return (
    <div>
      {renderIncomes}
    </div>
  )
}

export default IncomesList
