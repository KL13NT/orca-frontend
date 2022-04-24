import { FunctionComponent } from "react";
import { Navigate, Route, RouteProps } from "react-router";

interface ProtectedRouteProps extends RouteProps {
  user?: unknown;
  redirectPath: string;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  user,
  redirectPath,
  ...props
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
