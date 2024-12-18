import React, { useState } from "react";
import TodoList from "./components/TodoList";
import FilterOptions from "./components/FilterOptions";
import Actions from "./components/Actions";
import StatusBar from "./components/StatusBar";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true, color: "" },
    { id: 2, text: "Learn Redux", completed: false, color: "purple" },
    { id: 3, text: "Build something fun!", completed: false, color: "blue" },
  ]);
  const [filterColor, setFilterColor] = useState("");
  const [newTask, setNewTask] = useState("");

 
  const addTodo = () => {
    if (newTask.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: newTask,
      completed: false,
      color: "",
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

 
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const setColor = (id, color) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, color } : todo))
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

 
  const markAllCompleted = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };


  const filteredTodos = filterColor
    ? todos.filter((todo) => todo.color === filterColor)
    : todos;

  return (
    <div className="app">
      <h1>Todos</h1>
      <div className="new-task">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setColor={setColor}
      />
      <Actions
        clearCompleted={clearCompleted}
        markAllCompleted={markAllCompleted}
      />
      <StatusBar todos={todos} />
      <FilterOptions setFilterColor={setFilterColor} />
    </div>
  );
};

export default App;
