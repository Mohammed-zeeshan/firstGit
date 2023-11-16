import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseForm from './components/NewExpense/ExpenseForm';

function App() {
  const expenses = [
    {title: 'Toilet Paper', amount: '94.12', location: 'Store', date: new Date(2020, 8, 13)},
    {title: 'News TV', amount: '799.49', location: 'Electronic shop', date: new Date(2021, 3, 11)},
    {title: 'Car Insurance', amount: '294.67', location: 'Insurance Company', date: new Date(2021, 2, 28)},
    {title: 'New Desk', amount: '450', location: 'Furniture shop', date: new Date(2021, 6, 11)},
  ];
  const saveExpenseDataHandler = (enteredExpenseData) => {
    expenses.push(enteredExpenseData)
  }
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      {expenses.map((data,i) => {
        return (
          <div key={i}>
            <ExpenseItem 
              title={data.title} 
              amount={data.amount} 
              date={data.date}
              location={data.location}
            ></ExpenseItem>
          </div>
        )
      })}
    </div>
  );
}

export default App;
