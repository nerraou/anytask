import { useMutation } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface Todo {
  token: string;
  text: string;
}

async function getTodo(todo: Todo) {
  return await baseQuery("/get/todos", {
    method: "POST",
    body: JSON.stringify({ text: todo.text }),
    headers: {
      Authorization: `Bearer ${todo.token}`,
      "content-type": "application/json",
    },
  });
}

function useGetTodosMutation() {
  return useMutation<Response, RequestError, Todo>({
    mutationFn: getTodo,
  });
}

export default useGetTodosMutation;
