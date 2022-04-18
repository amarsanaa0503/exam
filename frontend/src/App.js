import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const fetchHandler = async () => {
  return await axios
    .get("http://localhost:3001/api/todo")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setTodos(data.data));
  }, []);

  return (
    <div className="App">
      {todos.map((todo, i) => (
        <li>{todo.todoDesc}</li>
      ))}
    </div>
  );
}

export default App;
