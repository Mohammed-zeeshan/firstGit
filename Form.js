import React, { useState } from 'react'
import ErrorModal from '../ErrorModal/ErrorModal';
import './Form.css'

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [errorModal, setErrorModal] = useState();

    const usernameChangeHandler =(event) => {
        setUsername(event.target.value)
    }
    const ageChangeHandler =(event) => {
        setAge(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0){
            setErrorModal({
                title: 'Invalid Input',
                message: 'Please enter valid message'
            })
        }
        if (+age < 1){
            setErrorModal({
                title: 'Invalid Age',
                message: 'Please enter valid Age'
            })
        }
        const data = {
            username: username,
            age: age,
        }
        props.onSaveData(data);
        setUsername('')
        setAge('')
    }
    const errorController = () => {
        setErrorModal(null);
    }
  return (
    <div className='body'>
        {errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} onconfirm={errorController}></ErrorModal>}
        <form onSubmit={submitHandler}>
            <div>
                <label>Username</label>
                <input type='text' className='input-box' value={username} onChange={usernameChangeHandler}/>
            </div>
            <div>
                <label>Age(Years)</label>
                <input type='number' className='input-box'  value={age} onChange={ageChangeHandler}/>
            </div>
            <div>
                <button type='submit'>Add User</button>
            </div>
        </form>
    </div>
  )
}

export default Form