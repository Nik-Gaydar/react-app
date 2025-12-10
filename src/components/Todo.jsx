import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить ноутбук', isDone: false},
    {id: 'task-2', title: 'Закрыть долги', isDone: true},
  ]

  const deleteAllTasks = () => {
    console.log('Удаляем все задачи')
  }

  const deleteTask = (taskid) => {
    console.log(`Удаляем задачу с id: ${taskid}`)
  }

  const toggleTaskComplete = (taskid, isDone) => {
    console.log(`ЗАдача ${taskid} ${isDone ? 'Выполнена':'Не выполнена'}`)
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({isDone}) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo