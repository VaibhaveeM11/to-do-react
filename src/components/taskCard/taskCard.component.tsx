import { FC, useCallback } from "react";
import { StyledTaskCardWrapper } from "./taskCard.styled";
import { taskCardProps } from "./types";

const TaskCard: FC<taskCardProps> = ({
  taskText,
  onSetTaskList: onDelete,
  taskId
}) => {
  const onDeleteClick = useCallback(() => {
    return onDelete((currentTaskList) => {
      let updatedList = currentTaskList;
      updatedList = currentTaskList.filter((_, id) => id !== taskId);
      return updatedList;
    });
  }, [onDelete, taskId]);
  return (
    <StyledTaskCardWrapper>
      <p>{taskText}</p>
      <button onClick={() => onDeleteClick()}> Delete </button>
    </StyledTaskCardWrapper>
  );
};
export default TaskCard;
