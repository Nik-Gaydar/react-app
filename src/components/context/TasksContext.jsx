import { createContext } from 'react'
import useTasks from "../../hooks/useTasks.js";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
  const { children } = props

  const {
    tasks,
    filteredTasks,
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
  } = useTasks()

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}