import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo, setColor }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <select
        value={todo.color}
        onChange={(e) => setColor(todo.id, e.target.value)}
      >
        <option value="">Select</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
        <option value="red">Red</option>
      </select>
      <button onClick={() => deleteTodo(todo.id)}>✕</button>
    </div>
  );
};

export default TodoItem;
