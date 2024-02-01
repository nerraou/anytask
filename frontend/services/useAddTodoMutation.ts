import { useMutation, useQueryClient } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface AddTodo {
  text: string;
}

interface UseAddTodoMutationParams {
  token: string;
}

async function addTodo(todo: AddTodo, token: string) {
  const apiUrl = process.env.EXPO_PUBLIC_API_BASE_URL + "/todos";

  return await baseQuery(apiUrl, {
    method: "POST",
    body: JSON.stringify({ text: todo.text }),
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
}

function useAddTodoMutation(params: UseAddTodoMutationParams) {
  const queryClient = useQueryClient();

  return useMutation<Response, RequestError, AddTodo>({
    mutationFn: (body) => addTodo(body, params.token),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["/todos"],
      });
    },
  });
}

export default useAddTodoMutation;
