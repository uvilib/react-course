import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

interface PropsArrayItems {
  label: string;
  important: boolean;
  id: number;
}

const TodoList: React.FC<{ todos: Array<PropsArrayItems> }> = ({ todos }) => {
  const elements = todos.map((item, index) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
