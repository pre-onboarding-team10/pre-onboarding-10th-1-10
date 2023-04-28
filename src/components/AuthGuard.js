import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthGuard = ({ children, restricted }) => {
  const { authed } = useAuth();
  if (restricted && !authed) {
    return <Navigate to="/signin" replace={true} />;
  } else if (!restricted && authed) {
    return <Navigate to="/todo" replace={true} />;
  }

  return children;
};
