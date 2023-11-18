import React, { useRef, useState } from 'react'
import ErrorModal from '../ErrorModal/ErrorModal';
import './Form.css'
import Wrapper from '../Helpers/Wrapper';

const Form = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const [errorModal, setErrorModal] = useState();
    const submitHandler = (event) => {
        const username = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        const college = collegeInputRef.current.value;
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0 || college.trim().length === 0){
            setErrorModal({
                title: 'Invalid Input',
                message: 'Please enter valid message'
            })
            return;
        }
        if (+age < 1){
            setErrorModal({
                title: 'Invalid Age',
                message: 'Please enter valid Age'
            })
            return;
        }
        props.onSaveData(username, age, college);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';
    }
    const errorController = () => {
        setErrorModal(null);
    }
  return (
    <Wrapper>
        {errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} onconfirm={errorController}></ErrorModal>}
        <form onSubmit={submitHandler}>
            <div>
                <label>Username</label>
                <input type='text' className='input-box' ref={nameInputRef}/>
            </div>
            <div>
                <label>Age(Years)</label>
                <input type='number' className='input-box' ref={ageInputRef}/>
            </div>
            <div>
                <label>College Name</label>
                <input type='text' className='input-box' ref={collegeInputRef}/>
            </div>
            <div>
                <button type='submit'>Add User</button>
            </div>
        </form>
    </Wrapper   >
  )
}

export default Form
