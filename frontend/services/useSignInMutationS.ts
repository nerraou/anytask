import { useMutation } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface SignIn {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

async function signIn(user: SignIn) {
  const apiUrl = process.env.EXPO_PUBLIC_API_BASE_URL + "/auth/sign-in";

  const response = await baseQuery(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: user.email, password: user.password }),
  });

  return response.json();
}

function useSignInMutation() {
  return useMutation<SignInResponse, RequestError, SignIn>({
    mutationFn: signIn,
  });
}

export default useSignInMutation;
