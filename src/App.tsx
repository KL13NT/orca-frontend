import { useAuth0, User } from "@auth0/auth0-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LogoutButton from "./components/logout-button";
import useUserMeta from "./hooks/useUserMeta";
import { UserMeta } from "./interfaces";
import logo from "./logo.svg";
import CompleteProfile from "./screens/complete-profile";
import Dashboard from "./screens/dashboard";
import Login from "./screens/login";

const incompleteProfileRoutes = (
  <>
    <Route path="/complete-profile" element={<CompleteProfile />} />
    <Route path="*" element={<Navigate to={"/complete-profile"} replace />} />
  </>
);

const authenticatedRoutes = (
  <>
    <Route path="/" element={<Dashboard />} />
    <Route path="*" element={<Navigate to={"/"} replace />} />
  </>
);

const unauthenticatedRoutes = (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to={"/login"} replace />} />
  </>
);

const getUserRoutes = (user: User | undefined, meta: UserMeta | null) => {
  if (!user) return unauthenticatedRoutes;
  else if (user && !meta) return incompleteProfileRoutes;
  else return authenticatedRoutes;
};

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { meta, loaded } = useUserMeta();

  if (isLoading || (isAuthenticated && !loaded)) {
    return <div>Loading ...</div>;
  }

  const routes = getUserRoutes(user, meta);

  return (
    <div className="App">
      <header className="flex items-center justify-between px-12 py-4 border-b border-alt">
        <img src={logo} alt="logo" className="h-20" />

        <LogoutButton />
      </header>

      <div className="mt-8 px-12 py-4">
        <BrowserRouter
          basename={
            import.meta.env.MODE === "production" ? "/orca-frontend/" : ""
          }
        >
          <Routes>{routes}</Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
