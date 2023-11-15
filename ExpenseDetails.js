import React, {useState} from 'react';
import './ExpenseItem.css';

function ExpenseDetails(props) {
  const [amount, setAmount] = useState(props.amount)

  const clickHandler = () => {
    setAmount(100)
    console.log(amount)
  }
  return (
    <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <p>Location: {props.location}</p>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Delete</button>
    </div>
  )
}

export default ExpenseDetails;
