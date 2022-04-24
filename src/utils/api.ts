import { User } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;

export const fetchUserMeta = (user: User, accessToken: string) =>
  fetch(`https://${domain}/api/v2/users/${user.sub}`, {
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
    }/projects/${projectId}/regenerate`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

export const updateUserProfile = (data: unknown, accessToken: string) =>
  fetch(`${import.meta.env.VITE_ORCA_API_ENDPOINT}/update`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
