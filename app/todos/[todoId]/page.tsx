type PageProps = {
  params: {
    todoId: string;
  }
}


function TodoPage({ params: { todoId } }: PageProps) {
  // console.log(todoId)
  return (
    <div>{todoId}</div>
  )
}

export default TodoPage