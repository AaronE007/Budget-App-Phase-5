import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/user"

const BillUpdateForm = ({id}) => {
  const [errors, setErrors] = useState([])
  const {onUpdateBill} = useContext(UserContext)
  const [userbill, setUserBill] = useState({
    name: "", 
    description: "",
    amount: ""
  })
 
  const handleChange = (e) => {
    setUserBill({
      ...userbill,
      [e.target.name]: e.target.value
    })
  }

  const newBill = {
    name: userbill.name,
    description: userbill.description,
    amount: userbill.amount
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/user_bills/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBill),
   })
    .then(res => res.json())
    .then(updatedBill => {
        if (!updatedBill.errors) {
          onUpdateStock(updatedBill)
        } else {
          const errorsList = updatedBill.errors.map(e => <li>{e}</li>)
          setErrors(errorsList)
        }
     })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input onChange={handleChange} type="text" name="name" value={userbill.name} required/>
          <br/>
          <br/>
        <label>Description: </label>
        <input onChange={handleChange} type="number" name="description" value={userbill.description} required/>
          <br/>
          <br/>
        <label>Amount: </label>
        <input onChange={handleChange} type="text" name="amount" value={userbill.amount} required/>
          <br/>
        <input type="submit" value="Change Bill Data" />
      </form>
      <ul>
        {errors}
      </ul>
    </div>
  )
}

export default BillUpdateForm