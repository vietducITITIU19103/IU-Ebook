// routes
import { paths } from 'src/routes/paths';
// utils
import axios, { endpoints } from '@/utils/axios';
import { HOST_API } from '@/config-global';

// ----------------------------------------------------------------------

export function jwtDecode(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string | null) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  // console.log('isValidToken', decoded.exp);

  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const refreshAccessToken = async (refresh_token: string | null) => {
  try {
    // Make an API request to refresh the access token
    const response = await fetch(`${HOST_API}` + endpoints.auth.refresh_token, {
      method: 'POST',
      headers: { Authorization: `Bearer ${refresh_token}` },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const tokenExpired = (exp: number) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert('Token expired');

    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');

    window.location.href = paths.auth.login;
  }, timeLeft);
};

export const setSession = (accessToken: string | null, refreshToken: string | null) => {
  if (accessToken && refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    tokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    delete axios.defaults.headers.common.Authorization;
  }
};
