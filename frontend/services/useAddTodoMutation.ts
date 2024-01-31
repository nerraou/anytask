import { useMutation } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface Todo {
  token: string;
  text: string;
}

async function addTodo(todo: Todo) {
  return await baseQuery("/post/todos", {
    method: "POST",
    body: JSON.stringify({ text: todo.text }),
    headers: {
      Authorization: `Bearer ${todo.token}`,
      "content-type": "application/json",
    },
  });
}

function useAddTodoMutation() {
  return useMutation<Response, RequestError, Todo>({
    mutationFn: addTodo,
  });
}

export default useAddTodoMutation;
