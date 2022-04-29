export const fetchUserMeta = (accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/users`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const fetchUserProjects = (accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/projects`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const deleteUserProject = (projectId: string, accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/projects/${projectId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const createUserProject = (data: unknown, accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/projects`, {
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
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

export const completeUserProfile = (data: unknown, accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/users/complete-profile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
