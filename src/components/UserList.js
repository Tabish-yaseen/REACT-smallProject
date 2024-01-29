import React, { useState } from "react";
import UserListItem from "./UserListItem";
import AddUser from "./AddUser";
import Card from "../UI/Card";
import classes from './UserList.module.css'

export default function UserList({ arr }) {
  const [updatedList, setUpdatedList] = useState(arr);

  const addItemHandler = (detail) => {
    setUpdatedList((previousList) => [detail, ...previousList]);
  };

  return (
    <Card className={classes.users}>
      <AddUser onAdd={addItemHandler} />

      {updatedList.map((element) => (
        <UserListItem key={element.id} userName={element.name} age={element.age} />
      ))}
    </Card>
  );
}
