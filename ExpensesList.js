import React from 'react'
import ExpenseItem from './ExpenseItem'


const ExpensesList = (props) => {
    if (props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
    else if (props.items.length === 1){
        return (
            <div>
                <ExpenseItem 
                key ={props.items[0].id}
                title={props.items[0].title} 
                amount={props.items[0].amount} 
                date={props.items[0].date}
                location={props.items[0].location}
                ></ExpenseItem>
                <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
            </div>
        )
    }
  return (
    <ul>
        {props.items.map((data) => {
        return (
            <ExpenseItem 
            key ={data.id}
            title={data.title} 
            amount={data.amount} 
            date={data.date}
            location={data.location}
            ></ExpenseItem>
        )
        })}
    </ul>
  )
}

export default ExpensesList
