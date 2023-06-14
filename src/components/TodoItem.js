import React, { useCallback, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import { css, styled } from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex: 1;
`;
const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 1rem;
  ${(props) =>
    props.complete === "true"
      ? css`
          margin-left: 0.5rem;
          color: #adb5bd;
          text-decoration: line-through;
        `
      : css`
          margin-left: 0.5rem;
        `}
  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid black;
    `}
`;

const StyledTodoItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const StyledCheckbox = styled.button`
  padding: 0;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

const StyledBiCheckboxChecked = styled(BiCheckboxChecked)`
  /* font-size: 1.5rem; */
  color: #22b8cf;
`;

const StyledBiCheckbox = styled(BiCheckbox)`
  /* font-size: 1.5rem; */
`;

const StyledButton = styled.button`
  padding: 0;
  padding-left: 1rem;
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoItem = ({ todoItem, toggleItem, removeItem, updateItem }) => {
  const { checked } = todoItem;
  const [value, setValue] = useState(todoItem.text);
  const [isFocused, setIsFocused] = useState(false);
  const inputElement = useRef(null);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onToggleClick = useCallback(
    (event) => {
      toggleItem(todoItem.id);
    },
    [todoItem.id, toggleItem]
  );

  const onRemoveClick = useCallback(
    (event) => {
      removeItem(todoItem.id);
    },
    [removeItem, todoItem.id]
  );

  const onClick = (event) => {
    console.log("클릭");
    console.log(event.target);
    setIsFocused(true);
    if (event.target.disabled) {
      event.target.disabled = false;
      inputElement.current.focus();
    }
  };

  const onBlur = useCallback(
    (event) => {
      setIsFocused(false);
      if (!event.target.disabled) {
        event.target.disabled = true;
        updateItem(todoItem.id, value);
      }
    },
    [todoItem.id, updateItem, value]
  );

  return (
    <StyledTodoItem className="todo-item-box">
      <StyledCheckbox className="checkbox" onClick={onToggleClick}>
        {checked ? <StyledBiCheckboxChecked /> : <StyledBiCheckbox />}
      </StyledCheckbox>
      <StyledLabel checked={checked} onClick={onClick} onBlur={onBlur}>
        <StyledInput
          className="todo-item-text"
          complete={checked.toString()}
          value={value}
          onChange={onChange}
          disabled={true}
          isFocused={isFocused}
          ref={inputElement}
        ></StyledInput>
      </StyledLabel>
      <StyledButton className="todo-remove-btn" onClick={onRemoveClick}>
        <IoClose></IoClose>
      </StyledButton>
    </StyledTodoItem>
  );
};

export default TodoItem;