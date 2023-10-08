export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  status?: string;
  loading: boolean;
  user: AuthUserType;
};

// ----------------------------------------------------------------------

type CanRemove = {
  login?: (email: string, password: string) => Promise<void>;
};

export type JWTContextType = CanRemove & {
  user: AuthUserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  // logout: () => Promise<unknown>;
  // getUser: () => Object | null
};

// ----------------------------------------------------------------------

export enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

export type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

export type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];