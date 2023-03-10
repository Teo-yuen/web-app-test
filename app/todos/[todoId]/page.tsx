import { notFound } from "next/navigation";
import { Todo } from "../../../tying";


type PageProps = {
  params: {
    todoId: string;
  }
}

async function fetchTodoItem(todoId: string) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );

  const todo: Todo = await result.json();
  return todo;
}


async function TodoPage({ params: { todoId } }: PageProps) {

  const todo = await fetchTodoItem(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>

      <p className="border-t border-black mt-5 text-right">By User: {todo.userId}</p>
    </div>
  )
}

export default TodoPage

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  return todos.map((todo) => ({
    todoId: todo.id.toString()
  }));
}
