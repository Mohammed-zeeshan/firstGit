import React, { useState } from 'react';
import Form from './Components/Form';
import Total from './Components/Total';
import Lists from './Components/Lists';

function App() {
  const [item, setItem] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const addItemHandler = (names) => {
    setItem(prevItem => {
      const updatedItems = [...prevItem]
      updatedItems.unshift({id: names.productId, sell: names.selling, name: names.productName})
      return updatedItems;
    })
    setTotalValue(totalValue + parseInt(names.selling))
  }
  const deleteItemHandler = itemId => {
    setItem(prevItem => {
      const updatedItems = prevItem.filter(goal => goal.id !== itemId.id)
      return updatedItems;
    })
    setTotalValue(totalValue - parseInt(itemId.selling))
    localStorage.removeItem(itemId.id)
  }
  let context = (
    <p></p>
  )
  if (item.length > 0){
    context = (<Lists items={item} onDeleteItem={deleteItemHandler}/>)
  }

  return (
    <div>
      <Form details={addItemHandler}/>
      {context}
      <Total amount={totalValue}/>
    </div>
  );
}

export default App;
