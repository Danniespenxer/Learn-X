import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { parseJwt } from "../utils/jwt";
import { authReducer, AuthAction } from "../reducers/authReducer";

interface AuthState {
  user: { id: string; username: string; roles: string[] } | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (token: string) => void;
  logout: () => void;
}>({
  state: initialState,
  dispatch: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (token: string) => {
    const payload = parseJwt(token);
    dispatch({
      type: "LOGIN",
      payload: {
        user: payload
          ? { id: payload.sub, username: payload.username, roles: payload.roles || [] }
          : null,
        token,
      },
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);