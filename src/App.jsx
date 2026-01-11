import Todo from './components/Todo.jsx'
import { TasksProvider } from "./components/context/TasksContext.jsx";

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App
