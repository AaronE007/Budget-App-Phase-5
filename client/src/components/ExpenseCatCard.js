import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
// import BillList from './BillList';


const ExpenseCatCard = ({expenseCategory}) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }



  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div style={{margin: "auto", border: "solid", backgroundColor: "#2a6592", height: 200, width:300, color: "peachpuff"}}>
      <h3>Name: {expenseCategory.name}</h3>
      <br/>
      <button onClick={handleClick}>Click to see User Bills</button>
    </div>
    <div style={{margin: "auto", border: "solid", backgroundColor: "peachpuff", height: 600, width: 300, color: "#2a6592"}}>
      <div>
      <h3>hello</h3>
      </div>
      <br/>
        <button onClick={handleClick}>Click to Return to Category</button>
    </div>
  </ReactCardFlip>  
  )
}

export default ExpenseCatCard


