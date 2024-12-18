import React from "react";

const Actions = ({ clearCompleted, markAllCompleted }) => {
  return (
    <div className="actions">
      <button onClick={markAllCompleted}>Mark All Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Actions;
