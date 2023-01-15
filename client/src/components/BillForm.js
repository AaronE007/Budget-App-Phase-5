import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/User"

const BillForm = () => {
  const {addBill} = useContext(UserContext)
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
    amount: userbill.amount,
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/user_bills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBill),
   })
    .then(res => res.json())
    .then(userbill => {
          addBill(userbill)
     })
  } 

  return (
  <div>
    <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "#8ec3eb" , height: 600, width: 400, color: "#2a6592"}}>
      <div>
        <h5>Add a New Bill Here.</h5>
      </div>
      <label>Name: </label>
      <input onChange={handleChange} type="text" name="name" value={userbill.name} required/>
        <br/>
      <label>Descriptiont: </label>
      <input onChange={handleChange} type="text" name="desciption" value={userbill.description} required/>
        <br/>
      <label>Amount: </label>
      <input onChange={handleChange} type="number" name="Amount" value={userbill.amount} required/>
        <br/>
      <input type="submit" value="Add Bill" />
    </form>
  </div>
  )
}

export default BillForm