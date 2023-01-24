import React,{ useState, useContext } from "react";
import BillUpdateForm from './BillUpdateForm';
import ReactCardFlip from 'react-card-flip';
import { UserContext } from '../context/User'

const BillCard = ({bill}) => {

  const{id} = bill
  const [isFlipped, setIsFlipped] = useState(false)
  const {deleteUserBill} = useContext(UserContext)


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  const  handleDeleteClick = () => {
    deleteUserBill(id)
   }


  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 250, width:200, color: "#db9833"}}>
    <button onClick={handleDeleteClick}>Delete</button>
      <h3>Name: {bill.name}</h3>
      <h4>Amount: {bill.amount}</h4>
      <h4>Description: {bill.description}</h4>
      <br/>
      <button onClick={handleClick}>Click to Change Bill</button>
    </div>
  <div style={{margin: "auto", border: "solid", backgroundColor: "peachpuff", height: 250, width: 200, color: "#2a6592"}}>
    <div>
      <BillUpdateForm id={id} />
    </div>
    <br/>
      <button onClick={handleClick}>Click to See Updated Bill</button>
  </div>
  </ReactCardFlip> 
  )
}

export default BillCard


  