import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";

import Button from "../components/button";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({});
  };

  return (
    <div className="flex justify-center align-center">
      <form className="flex flex-col">
        <h1 className="text-3xl text-center">Welcome back!</h1>
        <p className="text-base text-center mt-2">
          Log in to continue to the Orca Dashboard.
        </p>

        <Button className="mt-6" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
