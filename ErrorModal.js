import React from 'react'
import  ReactDOM  from 'react-dom'

const Backdrop = props => {
    return <div onClick={props.onconfirm}/>
}
const ModalOverlay = props => {
    return (
        <div>
        <div onClick={props.onconfirm}/>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <button onClick={props.onconfirm}>Okay</button>
        </footer>
    </div>
    )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onconfirm}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
            <ModalOverlay
            title={props.title}
            message={props.message}
            onconfirm={props.onconfirm}
            />,
            document.getElementById('overlay-root')
        )}
    </React.Fragment>
  )
}

export default ErrorModal
