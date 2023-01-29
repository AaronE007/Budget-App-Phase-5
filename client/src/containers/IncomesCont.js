import React,{ useContext } from "react";
import IncomesList from '../components/IncomesList';
import IncomeForm from '../components/IncomeForm';
import { UserContext } from '../context/User'


const IncomeCont = () => {

  const {incomesAmount} = useContext(UserContext)

  return (
    <div>
      <h3>Add Income Here</h3>
      <IncomeForm />
      <br/>
      <br/>
      <h2>Incomes</h2>
      <IncomesList />
      <h3>Incomes Totaled</h3> 
      {incomesAmount}
    </div>
  )
}

export default IncomeCont
