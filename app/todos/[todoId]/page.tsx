type PageProps = {
  params: {
    todoId: string;
  }
}


function TodoPage({ params: { todoId } }: PageProps) {
  return (
    <div>{todoId}</div>
  )
}

export default TodoPage