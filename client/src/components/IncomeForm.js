import React,{ useState, useContext } from "react";
import {UserContext} from "../context/User";

const IncomeForm = () => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [timePeriod, setTimePeriod] = useState("")
  const [image, setImage] = useState("")

  const {addIncome} = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    addIncome({
      name: name,
      amount: amount,
      time_period: timePeriod,
      image: e.target.image
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
        <label>Time Period: </label>
        <input type="text" id="timePeriod" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} required/>
          <br/>
          <br/>
          <label>Image</label>
          <input type="file" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)} required/>

          <br/>
        <input type="submit" value="Add Income!" />
        <div>
          <h5>Add income here.</h5>
        </div>
      </form>
    </div>
  )
}

export default IncomeForm