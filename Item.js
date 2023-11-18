import React from 'react'

const Item = (props) => {
    console.log(props.username)
  return (
    <div>
        <p>{props.username} {props.age}</p>
    </div>
  )
}

export default Item