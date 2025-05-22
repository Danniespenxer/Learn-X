export type AuthAction =
  | { type: "LOGIN"; payload: { user: any; token: string } }
  | { type: "LOGOUT" };

export function authReducer(
  state: { user: any; token: string | null },
  action: AuthAction
) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user, token: action.payload.token };
    case "LOGOUT":
      return { user: null, token: null };
    default:
      return state;
  }
}