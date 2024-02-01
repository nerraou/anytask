import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import useSignInMutation from "../services/useSignInMutationS";

const ACCESS_TOKEN_STORE_KEY = "access-token";

export interface User {
  accessToken: string;
}

const authContext = createContext<UseProvideAuthReturn>(
  {} as UseProvideAuthReturn
);

export function useAuth() {
  return useContext(authContext);
}

interface AuthState {
  user?: User;
  isAuthenticated: boolean;
}

interface SignInMetadata {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface UseProvideAuthReturn extends AuthState {
  signInMutationMetadata: SignInMetadata;
  autoSignInMetadata: SignInMetadata;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  autoSignIn: () => Promise<void>;
}

export function useProvideAuth(): UseProvideAuthReturn {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
  });

  const signInMutation = useSignInMutation();
  const [autoSignInState, setAutoSignInState] = useState<SignInMetadata>({
    isError: false,
    isPending: false,
    isSuccess: false,
  });

  const signIn = useCallback(
    async (email: string, password: string) => {
      const response = await signInMutation.mutateAsync({
        email,
        password,
      });

      await SecureStore.setItemAsync(
        ACCESS_TOKEN_STORE_KEY,
        response.accessToken
      );

      setState({
        user: {
          accessToken: response.accessToken,
        },
        isAuthenticated: true,
      });
    },
    [signInMutation.mutateAsync]
  );

  const signOut = useCallback(async () => {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_STORE_KEY);

    setState({
      isAuthenticated: false,
    });
  }, []);

  const autoSignIn = useCallback(async () => {
    setAutoSignInState((prev) => {
      return { ...prev, isPending: true };
    });

    const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN_STORE_KEY);

    if (!accessToken) {
      setAutoSignInState((prev) => {
        return { ...prev, isPending: false };
      });

      setState({
        isAuthenticated: false,
      });
      return;
    }

    setState({
      user: {
        accessToken,
      },
      isAuthenticated: true,
    });

    setAutoSignInState((prev) => {
      return { ...prev, isPending: false, isSuccess: true };
    });
  }, []);

  return {
    ...state,
    signInMutationMetadata: {
      isPending: signInMutation.isPending,
      isError: signInMutation.isError,
      isSuccess: signInMutation.isSuccess,
    },
    autoSignInMetadata: autoSignInState,
    signIn,
    signOut,
    autoSignIn,
  };
}

interface AuthProviderProps {
  children: ReactNode | ReactNode[];
}

export function AuthProvider(props: AuthProviderProps) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>{props.children}</authContext.Provider>
  );
}
