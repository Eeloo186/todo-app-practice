import React, { useCallback, useRef, useState } from "react";
import { styled } from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoContainerBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

const TodoContainer = () => {
  const initTodoList = [
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링",
      checked: false,
    },
    {
      id: 3,
      text: "일정관리 앱 만들기",
      checked: false,
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const nextId = useRef(todoList.length + 1);

  const insertItem = useCallback(
    (value) => {
      const item = {
        id: nextId.current,
        text: value,
        checked: false,
      };
      setTodoList(todoList.concat(item));
      nextId.current += 1;
    },
    [todoList]
  );

  const toggleItem = useCallback(
    (selectedId) => {
      setTodoList(todoList.map((todoItem) => (selectedId === todoItem.id ? { ...todoItem, checked: !todoItem.checked } : todoItem)));
    },
    [todoList]
  );

  const removeItem = useCallback(
    (selectedId) => {
      setTodoList(todoList.filter((todoItem) => selectedId !== todoItem.id));
    },
    [todoList]
  );

  const updateItem = useCallback(
    (selectedId, text) => {
      setTodoList(todoList.map((todoItem) => (selectedId === todoItem.id ? { ...todoItem, text: text } : todoItem)));
    },
    [todoList]
  );

  const title = "일정 관리";
  return (
    <TodoContainerBlock className="todo-container" color="black">
      <AppTitle className="todo-title">{title}</AppTitle>
      <TodoInsert insertItem={insertItem}></TodoInsert>
      <TodoList todoList={todoList} toggleItem={toggleItem} removeItem={removeItem} updateItem={updateItem}></TodoList>
    </TodoContainerBlock>
  );
};

export default TodoContainer;
