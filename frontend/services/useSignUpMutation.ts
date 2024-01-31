import { useMutation } from "@tanstack/react-query";

import baseQuery, { RequestError } from "../utils/baseQuery";

interface SignUp {
  email: string;
  password: string;
}

async function signUp(user: SignUp) {
  return await baseQuery("/auth/sign-up", {
    method: "POST",
    body: JSON.stringify({ email: user.email, password: user.password }),
  });
}

function useSignUpMutation() {
  return useMutation<Response, RequestError, SignUp>({
    mutationFn: signUp,
  });
}

export default useSignUpMutation;
