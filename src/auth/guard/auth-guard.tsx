"use client"
import { useEffect, useCallback, useState } from 'react';
// routes

//
import { useAuthContext } from '../hooks';

import { paths } from '@/routes/paths';
import { useRouter } from 'next/navigation';

// ----------------------------------------------------------------------

const loginPaths: Record<string, string> = {
  jwt: paths.auth.login,
};

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const router = useRouter();

  const { authenticated, method } = useAuthContext();

  // console.log(authenticated)
  
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();

      const loginPath = "/auth/login/";

      const href = `${loginPath}?${searchParams}`;

      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [authenticated, method, router]);

  useEffect(() => {
    check();
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
