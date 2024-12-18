import React from "react";

const StatusBar = ({ todos }) => {
  const remaining = todos.filter((todo) => !todo.completed).length;
  return (
    <div className="status">
      <span>Remaining Todos: {remaining} item{remaining !== 1 ? "s" : ""} left</span>
    </div>
  );
};

export default StatusBar;
