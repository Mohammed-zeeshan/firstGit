import React from 'react'

const Item = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
        // localStorage.removeItem(props.id)
      };
  return (
    <div>
        {props.children} <button onClick={deleteHandler}>Delete Product</button>
    </div>
  )
}

export default Item