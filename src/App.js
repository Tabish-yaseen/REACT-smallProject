import React from "react";
import List from "./components/UserList";
const Item = [
  { id:'1',name: "toyoo", age: 75 },
  {id:'2', name: "poiu", age: 55 },
];
function App() {
  return (
    <React.Fragment>
      <List arr={Item} />
    </React.Fragment>
  );
}

export default App;
