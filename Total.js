import React from 'react'

const Total = (props) => {
  return (
    <div>
        <h2>Total Value of Products: </h2>
        <p>Rs {props.amount}</p>
    </div>
  )
}

export default Total;