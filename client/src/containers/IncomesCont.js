import React from 'react'
import IncomesList from '../components/IncomesList';
import IncomeForm from '../components/IncomeForm';

const IncomeCont = () => {
  return (
    <div>
      <h3>Add Income Here</h3>
      <IncomeForm />
      <br/>
      <br/>
      <h2>Incomes</h2>
      <IncomesList/>
    </div>
  )
}

export default IncomeCont
