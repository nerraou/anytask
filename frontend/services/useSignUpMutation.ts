import { useMutation } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface SignUp {
  email: string;
  password: string;
}

async function signUp(user: SignUp) {
  const api = process.env.EXPO_PUBLIC_API_BASE_UR + "/auth/sign-up";
  return await baseQuery(api, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: user.email, password: user.password }),
  });
}

function useSignUpMutation() {
  return useMutation<Response, RequestError, SignUp>({
    mutationFn: signUp,
  });
}

export default useSignUpMutation;
