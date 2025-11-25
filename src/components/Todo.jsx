import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить ноутбук', isDone: false},
    {id: 'task-2', title: 'Закрыть долги', isDone: true},
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({isDone}) => isDone).length}
      />
      <TodoList tasks={tasks}/>
    </div>
  )
}

export default Todo