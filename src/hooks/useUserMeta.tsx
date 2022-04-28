import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

import { UserMeta } from "../interfaces";
import { fetchUserMeta } from "../utils/api";

const useUserMeta = () => {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [userMeta, setUserMeta] = useState<UserMeta | null>(null);

  useEffect(() => {
    if (!user || !isAuthenticated) return;

    const getUserMeta = async () => {
      try {
        const accessToken = await getAccessTokenSilently();

        const metadataResponse = await fetchUserMeta(accessToken);

        console.log(metadataResponse);

        const { profile } = await metadataResponse.json();

        setUserMeta(profile);
        setLoaded(true);
      } catch (e) {
        console.log(e);
      }
    };

    getUserMeta();
  }, [user]);

  return {
    meta: userMeta,
    loaded,
  };
};

export default useUserMeta;
