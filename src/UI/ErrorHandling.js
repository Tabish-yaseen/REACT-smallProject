import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from './ErrorHandling.module.css'

const BackDrop=props=>{
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const ModalOverlay=props=>{
  return (
    <Card className={classes.modal}>
       <header className={classes.header}>
         <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
            <Button onClick={props.onConfirm} >Ok</Button>
        </footer>
      
    </Card>

  )
}

export default function ErrorHandling(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm}/>,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}

        />,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
    
  )
}
