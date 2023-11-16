import { useState } from 'react';
import './App.css';
// import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import ExpensesList from './components/Expenses/ExpensesList';

const DummyExpenses = [
  {id: 'e1', title: 'Toilet Paper', amount: '94.12', location: 'Store', date: new Date(2020, 8, 13)},
  {id: 'e2', title: 'News TV', amount: '799.49', location: 'Electronic shop', date: new Date(2021, 3, 11)},
  {id: 'e3', title: 'Car Insurance', amount: '294.67', location: 'Insurance Company', date: new Date(2021, 2, 28)},
  {id: 'e4', title: 'New Desk', amount: '450', location: 'Furniture shop', date: new Date(2021, 6, 11)},
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const [filteredYear, setFilteredYear] = useState('2019');
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  const setEiditngHandler = () => {
    setIsEditing(true)
  }
  
  return (
    <div>
      {!isEditing && <button onClick={setEiditngHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>}
      <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items={filteredExpenses}/>
      </div>
    </div>
  );
}

export default App;
