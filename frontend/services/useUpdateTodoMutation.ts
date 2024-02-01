import { useMutation, useQueryClient } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface UpdateTodo {
  id: number;
  done: boolean;
}

interface UseUpdateTodoMutationParams {
  token: string;
}

async function updateTodo(body: UpdateTodo, token: string) {
  const apiUrl = process.env.EXPO_PUBLIC_API_BASE_URL + "/todos/" + body.id;

  const response = await baseQuery(apiUrl, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ done: body.done }),
  });

  return response.json();
}

function useUpdateTodoMutation(params: UseUpdateTodoMutationParams) {
  const queryClient = useQueryClient();

  return useMutation<any, RequestError, UpdateTodo>({
    mutationFn: (body) => updateTodo(body, params.token),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["/todos"],
      });
    },
  });
}

export default useUpdateTodoMutation;
