import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";

import Button from "./button";

interface LogoutButtonProps {}

const LogoutButton: FunctionComponent<LogoutButtonProps> = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </Button>
  ) : null;
};

export default LogoutButton;
