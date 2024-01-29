import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorHandling from "../UI/ErrorHandling";
import classes from "./AddUser.module.css";
import Wrapper from "./Helpers/wrapper";

export default function AddUser(props) {
  const enteredRefValue=useRef()
  const enteredRefAge=useRef()
  const enteredRefcollege=useRef()
  
  
  const [error, setError] = useState(null);
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAgeValue=enteredRefAge.current.value
    const enterednameValue=enteredRefValue.current.value
    const enteredCollegeValue=enteredRefcollege.current.value
    
    
    if (enteredAgeValue === " " || enterednameValue === " " || enteredCollegeValue===' ') {
      setError({
        title: "Invalid input",
        message: "please Enter a Valid name and Age(non-empty values)",
      });
      return;
    }
    if (+enteredAgeValue < 1) {
      setError({
        title: "Invalid input",
        message: "please Enter a Valid Age(>0)",
      });
      return;
    }
    const obj = {
      id: Math.random().toString(),
      name: enterednameValue,
      age: enteredAgeValue,
      college:enteredCollegeValue
    };
    props.onAdd(obj);
    enteredRefValue.current.value=''
    enteredRefAge.current.value=''
    enteredRefcollege.current.value=''

   
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorHandling
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Username</label>
            <input
              type="text"
              ref={enteredRefValue}
             
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              ref={enteredRefAge}
             
            />
          </div>
          <div>
            <label>college name</label>
            <input
              type="text"
              ref={enteredRefcollege}
             
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );

}
