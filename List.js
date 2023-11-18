import React from 'react'
import Item from '../Item/Item'

const List = (props) => {
  return (
    <ul>
        {props.send.map(data => (
            <Item
                key={data.id}
                username={data.username}
                age={data.age}
            >
            </Item>
        ))}
    </ul>
  )
}

export default List