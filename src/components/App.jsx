import React, {useState}from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoItem, setToDoItem] = useState([]);
  
  function inputHandler(event) {
    const {name, value} = event.target;
    if (name === "inputText") {
      setToDo(value);
    }
  }

  function clickHandler() {
    setToDoItem((preValue) => {
      return [...preValue, toDo]
    });
    setToDo("")
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="inputText" onChange={inputHandler} type="text" value={toDo} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
          {toDoItem.map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
