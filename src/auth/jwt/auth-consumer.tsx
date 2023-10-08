'use client';

// components
//
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthConsumer({ children }: Props) {
  return (
    <AuthContext.Consumer>
      {(auth) => (auth.loading ? <div>Loading</div> : children)}
    </AuthContext.Consumer>
  );
}
