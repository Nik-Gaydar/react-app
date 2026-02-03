import {useEffect, useState} from "react";
import tasksAPI from "../api/TasksAPI.js";

const TaskPage = () => {
  const taskId = 'id'

  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHaserror] = useState(false)

  useEffect(() => {
    tasksAPI.getById(taskId)
      .then((taskData) => {
        setTask(taskData)
        setHaserror(false)
      })
      .catch(() => {
        setHaserror(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Task not found!</div>
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.isDone ? 'Задача выполнена' : 'Задача не выполнена'}</p>
    </div>
  )
}

export default TaskPage