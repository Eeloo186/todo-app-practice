import React, { useCallback, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { styled } from "styled-components";

const TodoInsertBlock = styled.div`
  display: flex;
  background: #495057;
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;
  &::placeholder {
    color: #dee2e6;
  }
`;
const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: cell;
  transition: 0.2s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = ({ insertItem }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onClick = useCallback(() => {
    if (value.trim() !== "") {
      insertItem(value);
    }
    setValue("");
  }, [insertItem, value]);

  return (
    <TodoInsertBlock className="todo-insert-box">
      <Input className="todo-insert-input" type="text" placeholder="추가할 일을 입력해주세요" onChange={onChange} value={value} />
      <Button onClick={onClick}>
        <IoAdd></IoAdd>
      </Button>
    </TodoInsertBlock>
  );
};

export default TodoInsert;
