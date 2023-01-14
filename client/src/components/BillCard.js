import React from 'react'

const BillCard = ({bill}) => {


  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:200, color: "#db9833"}}>
      <h3>Name: {bill.name}</h3>
      <h4>Amount: {bill.amount}</h4>
      <h4>Description: {bill.description}</h4>
    </div>
  <div style={{margin: "auto", border: "solid", backgroundColor: "peachpuff", height: 600, width: 300, color: "#2a6592"}}>
    <div>
      <BillUpdate />
    </div>
    <br/>
      <button onClick={handleClick}>Click to Return to Category</button>
  </div>
  </ReactCardFlip> 
  )
}

export default BillCard


  