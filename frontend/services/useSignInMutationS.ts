import { useMutation } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface SignIn {
  email: string;
  password: string;
}

async function signIn(user: SignIn) {
  return await baseQuery("/auth/sign-in", {
    method: "POST",
    body: JSON.stringify({ email: user.email, password: user.password }),
  });
}

function useSignInMutation() {
  return useMutation<Response, RequestError, SignIn>({
    mutationFn: signIn,
  });
}

export default useSignInMutation;
