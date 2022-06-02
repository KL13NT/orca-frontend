export const fetchUserMeta = (accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/users`, {
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const fetchUserProjects = (accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/projects`, {
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const deleteUserProject = (projectId: string, accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/projects/${projectId}`, {
    mode: "cors",
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const createUserProject = (data: unknown, accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/projects`, {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });

export const regenerateUserProjectKey = (
  projectId: string,
  accessToken: string
) =>
  fetch(
    `${
      import.meta.env.VITE_ORCA_API_ENDPOINT
    }/projects/${projectId}/refreshKey`,
    {
      method: "PATCH",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

export const completeUserProfile = (data: unknown, accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/users/complete-profile`, {
    mode: "cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
