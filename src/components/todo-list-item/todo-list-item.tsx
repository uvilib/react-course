import React from "react";
import "./todo-list-item.css";

interface TodoListItemProps {
  label: string;
  important?: boolean;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  label,
  important = false,
}) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <div>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
      </div>
    </span>
  );
};

export default TodoListItem;
