import React from 'react'
import Item from './Item'

const Lists = (props) => {
    console.log(props.items)
  return (
    <div>
        <h2>Products</h2>
        <ul>
            {props.items.map(data => (
                <Item
                key={data.id}
                id={data}
                onDelete={props.onDeleteItem}
                >
                    {data.name} - {data.sell}
                </Item>
            ))}
        </ul>
    </div>
  )
}

export default Lists