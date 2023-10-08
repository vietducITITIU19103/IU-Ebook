'use client';

import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { ActionsType, AuthStateType, Types } from '../types';
import { isValidToken, refreshAccessToken, setSession } from '../utils/utils';
import axios, { endpoints } from '@/utils/axios';
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

const STORAGE_KEY = 'accessToken';
const STORAGE_REFRESH = 'refreshToken';
// const INFO_HTTP = `http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata`;

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(STORAGE_KEY);
      const refreshToken = localStorage.getItem(STORAGE_REFRESH);

      if (accessToken) {
        if (isValidToken(accessToken)) {
          setSession(accessToken, refreshToken);

          const response = await axios.post(endpoints.auth.me);

          const { username } = response.data.data;

          dispatch({
            type: Types.INITIAL,
            payload: {
              user: username,
            },
          });
        } else {
          const newAccessToken = await refreshAccessToken(refreshToken);
          const data = newAccessToken.data;
          const _token = data.token;
          const _refreshToken = data.refreshToken;
          setSession(_token, _refreshToken);
          const responseAuthMe = await axios.post(endpoints.auth.me);
          const { username } = responseAuthMe?.data?.data;

          dispatch({
            type: Types.INITIAL,
            payload: {
              user: username,
            },
          });
        }
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (_username: string, _password: string) => {
    const form = new FormData();
    form.append('Username', _username);
    form.append('Password', _password);

    const response = await axios.post(endpoints.auth.login, form);
    const { token, refreshToken } = response?.data?.data;
    setSession(token, refreshToken);
    const responseAuthMe = await axios.post(endpoints.auth.me);
    const { username } = responseAuthMe?.data?.data;

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: username,
      },
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
    }),
    [login, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
