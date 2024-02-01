import { useQuery } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface UseTodosQueryParams {
  token?: string;
}

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodosResponse {
  data: Todo[];
}

async function getTodos(token: string) {
  const apiUrl = process.env.EXPO_PUBLIC_API_BASE_URL + "/todos";

  const response = await baseQuery(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

function useTodosQuery(params: UseTodosQueryParams) {
  return useQuery<TodosResponse, RequestError>({
    enabled: !!params.token,
    queryKey: ["/todos"],
    queryFn: () => getTodos(params.token as string),
  });
}

export default useTodosQuery;
