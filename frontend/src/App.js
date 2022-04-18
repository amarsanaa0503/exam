import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const fetchHandler = async () => {
  return await axios
    .get("http://54.169.182.63/api/todo")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setTodos(data.data));
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    const postMethod = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.desc.value,
        createDate: Date(),
      }),
    };
    fetch(`http://54.169.182.63/api/create`, postMethod)
      .then((response) => response.json())
      .then((data) => data)
      .then((data) => console.log(data))
      .catch((err) => err);
  };

  return (
    <div className="App">
      {todos.map((todo, i) => (
        <li key={i}>{todo.todoDesc}</li>
      ))}
      <Form onSubmit={addTodo}>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Control type="text" placeholder="what's next" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add task
        </Button>
      </Form>
    </div>
  );
}

export default App;
