import React, { useState } from 'react'

const Form = (props) => {
    const [productId, setProductId] = useState('');
    const [selling, setSelling] = useState('');
    const [productName, setProductName] = useState('');
    const productIdInputChangeHandler = (event) => {
        setProductId(event.target.value);
    }
    const sellingInputChangeHandler = (event) => {
        setSelling(event.target.value);
    }
    const productNameInputChangeHandler = (event) => {
        setProductName(event.target.value)
    }
    const submitForm = (event) => {
        event.preventDefault();
        const data = {
            productId: productId,
            selling: selling,
            productName: productName
        }
        props.details(data);
        localStorage.setItem(productId,data)
    }
  return (
    <div>
        <form>
            <label>Product ID: </label>
            <input type='number' value={productId} onChange={productIdInputChangeHandler}/>
            <label>Selling Price: </label>
            <input type='number' value={selling} onChange={sellingInputChangeHandler}/>
            <label>Product Name: </label>
            <input type='text' value={productName} onChange={productNameInputChangeHandler}/>
            <button type='submit' onClick={submitForm}>Add Product</button>
        </form>
    </div>
  )
}

export default Form