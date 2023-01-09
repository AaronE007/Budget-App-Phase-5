import React from 'react'
import ReactCardFlip from 'react-card-flip';


const ExpenseCatCard = ({expenseCategory}) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:300, color: "peachpuff"}}>
    <button onClick={handleDeleteClick}>Delete</button>
      <h3>Name: {expenseCategory.name}</h3>
      <br/>
      <button onClick={handleClick}>Click to see User Bills</button>
    </div>
    <div style={{margin: "auto", border: "solid", backgroundColor: "peachpuff", height: 600, width: 300, color: "#2a6592"}}>
      <div>
        <BillList /> 
      </div>
      <br/>
        <button onClick={handleClick}>Click to Return to Category</button>
    </div>
  </ReactCardFlip>
    
  )
}

export default ExpenseCatCard


