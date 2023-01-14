import Link from "next/link";
import { Todo } from "../../tying";

async function fetchTodosList() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await result.json();
  return todos;
}

async function TodosList() {

  const todos = await fetchTodosList();

  return (
    <>
      {
        todos.map((todo: Todo) => (
          <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo: ${todo.id}</Link>
          </p>
        ))
      }
    </>
  )
}

export default TodosList