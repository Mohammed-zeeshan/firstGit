import { useState } from 'react';
import './App.css';
import Form from './Component/Form/Form';
import List from './Component/List/List';

function App() {
  const [items, setItems] = useState([]);

  const saveDataHandler = (lists) => {
    console.log(lists)
    setItems(prevlists => {
      const updatedList = [...prevlists];
      updatedList.unshift({username: lists.username,age: lists.age, id:Math.random().toString()})
      return updatedList;
    })
  }
  return (
    <div className="App">
      <Form onSaveData={saveDataHandler}></Form>
      <List send={items}></List>
    </div>
  );
}

export default App;
