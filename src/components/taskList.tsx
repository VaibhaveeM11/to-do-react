import { useState } from "react";
import TaskCard from "./taskCard/taskCard.component";
import TaskInput from "./taskInput/taskInput.component";
import { StyledTaskListWrapper, TaskListHeader } from "./taskList.styled";
export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  // console.log(taskList);
  return (
    <>
      <TaskListHeader>
        <h1> Task To-DO </h1>
      </TaskListHeader>

      <TaskInput onAdd={(e: string) => setTaskList(() => [...taskList, e])} />
      {taskList?.length > 0 ? (
        taskList?.map((task, index) => {
          return (
            <StyledTaskListWrapper key={index}>
              <TaskCard
                taskId={index}
                taskText={task}
                onSetTaskList={setTaskList}
              />
            </StyledTaskListWrapper>
          );
        })
      ) : (
        <p> No Task added yet...</p>
      )}
    </>
  );
}
