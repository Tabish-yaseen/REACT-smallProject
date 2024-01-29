import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorHandling from "../UI/ErrorHandling";
import  classes from './AddUser.module.css'
import Wrapper from "./Helpers/wrapper";

export default function AddUser(props) {
  const [enteredValue, setEnteredValue] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");
  const[error,setError]=useState(null)
  const nameChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredAge===' ' || enteredValue===' '){
        setError({
          title:'Invalid input',
          message:'please Enter a Valid name and Age(non-empty values)',
          
        })
        return;
        
    }
    if(+enteredAge<1){
      setError({
        title:'Invalid input',
        message:'please Enter a Valid Age(>0)',
        
      })
      return;
        
    }
    const obj = {
     id:Math.random().toString(),
     name: enteredValue,
    age: enteredAge,
    };
    props.onAdd(obj);
    
    setEnteredValue("");
    setEnteredAge("");
  };

  const errorHandler=()=>{
    setError(null)
  }


  return (
    <Wrapper>
      {error && <ErrorHandling  title={error.title} message={error.message} onConfirm={errorHandler}/>}

       <Card className={classes.input}>
      <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" value={enteredValue} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </Wrapper>
   
    
  );
}
