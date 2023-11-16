import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpenseForm from './components/NewExpense/ExpenseForm';

const DummyExpenses = [
  {id: 'e1', title: 'Toilet Paper', amount: '94.12', location: 'Store', date: new Date(2020, 8, 13)},
  {id: 'e2', title: 'News TV', amount: '799.49', location: 'Electronic shop', date: new Date(2021, 3, 11)},
  {id: 'e3', title: 'Car Insurance', amount: '294.67', location: 'Insurance Company', date: new Date(2021, 2, 28)},
  {id: 'e4', title: 'New Desk', amount: '450', location: 'Furniture shop', date: new Date(2021, 6, 11)},
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };
  return (
    <div className='apps__'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      <ExpensesFilter/>
      {expenses.map((data) => {
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
    </div>
  );
}

export default App;
