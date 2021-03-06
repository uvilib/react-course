import React from "react";
import "./app-header.css";

const AppHeader: React.FC<{ toDo: number; done: number }> = ({
  toDo,
  done,
}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
