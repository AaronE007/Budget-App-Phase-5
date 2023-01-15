import { useState, useContext } from "react"
import React  from 'react'
import { UserContext } from "../context/user"

const BillUpdateForm = ({id}) => {
  const [errors, setErrors] = useState([])
  const {onUpdateBill} = useContext(UserContext)
  const [bill, setBill] = useState({
    name: "", 
    pricePurchasedAt: "",
    number: "",
    info: ""
  })
 
  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value
    })
  }

  const newStock = {
    name: stock.name,
    price_purchased_at: stock.pricePurchasedAt,
    number: stock.number,
    info: stock.info
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/stocks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStock),
   })
    .then(res => res.json())
    .then(updatedStock => {
        if (!updatedStock.errors) {
          onUpdateStock(updatedStock)
        } else {
          const errorsList = updatedStock.errors.map(e => <li>{e}</li>)
          setErrors(errorsList)
        }
     })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input onChange={handleChange} type="text" name="name" value={stock.name} required/>
          <br/>
          <br/>
        <label>Amount: </label>
        <input onChange={handleChange} type="number" name="pricePurchasedAt" value={stock.pricePurchasedAt} required/>
          <br/>
          <br/>
        <label>Description: </label>
        <input onChange={handleChange} type="text" name="description" value={stock.number} required/>
          <br/>
        <input type="submit" value="Change Stock Buy Data" />
      </form>
      <ul>
        {errors}
      </ul>
    </div>
  )
}

export default BillUpdateForm