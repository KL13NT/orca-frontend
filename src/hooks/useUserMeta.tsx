import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

import { UserMeta } from "../interfaces";
import { fetchUserMeta } from "../utils/api";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;

const useUserMeta = () => {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const [userMeta, setUserMeta] = useState<UserMeta | null>(null);

  useEffect(() => {
    if (!user || !isAuthenticated) return;

    const getUserMeta = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const metadataResponse = await fetchUserMeta(user, accessToken);

        const { user_metadata } = await metadataResponse.json();

        setUserMeta(user_metadata);
      } catch (e) {
        console.log(e);
      }
    };

    getUserMeta();
  }, [user]);

  return userMeta;
};

export default useUserMeta;
