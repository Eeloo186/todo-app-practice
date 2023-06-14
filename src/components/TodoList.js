import React from "react";
import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
  background: white;
`;

const TodoList = ({ todoList, toggleItem, removeItem, updateItem }) => {
  return (
    <TodoListBlock className="todo-list-box">
      {todoList.map((item) => (
        <TodoItem key={item.id} todoItem={item} toggleItem={toggleItem} removeItem={removeItem} updateItem={updateItem}></TodoItem>
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
