import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setoDo] = useState("");
  const [toDos, setoDos] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it has to be done 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setoDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={() =>
            setoDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
        ></i>
      </div>
      <div className="todos">
        {toDos.map((values) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setoDos(
                      toDos.filter((value2) => {
                        if (value2.id === values.id) {
                          value2.status = e.target.checked;
                        }
                        return value2;
                      })
                    );
                  }}
                  value={values.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{values.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => { setoDos(toDos.filter((singletodo) => {
                       return singletodo.id !== values.id
                          
  
                        
                      })) }}></i>
              </div>
            </div>
          );
        })}

        {toDos.map((values) => {
          if (values.status) {
            return (
              <div>
                <h1>{values.text}</h1>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
