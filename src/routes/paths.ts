const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    chat: `${ROOTS.DASHBOARD}/chat`,
    marketplace: `${ROOTS.DASHBOARD}/marketplace`,
    advertisement: `${ROOTS.DASHBOARD}/advertisement`,
    analysis: `${ROOTS.DASHBOARD}/analysis`,
    notification: `${ROOTS.DASHBOARD}/notification`,
    payment: `${ROOTS.DASHBOARD}/payment`,
  },
};
