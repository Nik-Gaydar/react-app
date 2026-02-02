import {TasksProvider} from "../components/context/TasksContext";
import Todo from "../components/Todo";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage