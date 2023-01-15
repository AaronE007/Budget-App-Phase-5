import React,{ useState, useContext } from "react";
import {UserContext} from "../context/user";

const CompaniesForm = () => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const {addIncome} = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    addCompany({
      name: name,
      amount: amount
    })
  }

  return (
    <div>
    <h2>Add Income</h2>
      <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "#8ec3eb" , height: 300, width: 400, color: "#2a6592"}}>
        <label>Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          <br/>
          <br/>
        <label>Amount: </label>
        <input type="text" id="description" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
          <br/>
          <br/>
        <input type="submit" value="Add Income!" />
        <div>
          <h5>Add income here.</h5>
        </div>
      </form>
    </div>
  )
}

export default CompaniesForm