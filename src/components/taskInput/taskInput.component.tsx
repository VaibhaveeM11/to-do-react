import { FC, useCallback, useEffect, useRef } from "react";
import { StyledTaskInputWrapper } from "./taskInput.styled";
import { taskProps } from "./types";

const TaskInput: FC<taskProps> = ({ onAdd }) => {
  const inputRef = useRef(null);
  const onAddClick = useCallback(() => {
    let value = inputRef.current.value;
    value.length > 0 ? onAdd(value) : alert("Please add task !");
  }, [onAdd]);
  useEffect(() => {
    inputRef.current.value = null;
  });
  return (
    <StyledTaskInputWrapper>
      <input ref={inputRef} placeholder="Add Task..." />
      <button onClick={onAddClick}>Add</button>
    </StyledTaskInputWrapper>
  );
};
export default TaskInput;
