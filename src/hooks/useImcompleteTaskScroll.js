import { useRef } from "react";

const useIncompleteTaskScroll = (tasks) => {
  const firstIncompleteTaskRef = useRef(null)
  //В масиве задач находим первый элемент у когорого isDone - false, если такой есть, то получаем его id
  const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id

  return {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  }
}

export default useIncompleteTaskScroll