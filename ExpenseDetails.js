import React, {useState} from 'react';
import './ExpenseItem.css';

const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

  const clickHandler = () => {
    setTitle('Updated!')
    setAmount(100)
    console.log(amount)
  }
  return (
    <div className='expense-item__description'>
        <h2>{title}</h2>
        <p>Location: {props.location}</p>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}

export default ExpenseDetails;
