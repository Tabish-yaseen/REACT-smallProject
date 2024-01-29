import React from "react";
import List from "./components/UserList";
const Item = [
  { id:'1',name: "toyoo", age: 75,college:'sp' },
  {id:'2', name: "poiu", age: 55,college:'skaut' },

];
function App() {
  return (
    <React.Fragment>
      <List arr={Item} />
    </React.Fragment>
  );
}

export default App;
