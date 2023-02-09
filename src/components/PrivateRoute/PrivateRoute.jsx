import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from '../../store/auth';

export default function PrivateRoute({ children, redirectPath = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return isLoggedIn ? children : <Outlet />;
}
