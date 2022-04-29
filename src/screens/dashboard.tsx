import { useAuth0 } from "@auth0/auth0-react";
import { FormEvent, FunctionComponent, useEffect, useState } from "react";

import CreateProjectModal from "../components/create-project-modal";
import ProjectCard from "../components/project-card";
import { Project } from "../interfaces";
import plusIcon from "../plus.svg";
import {
  createUserProject,
  deleteUserProject,
  fetchUserProjects,
  regenerateUserProjectKey,
} from "../utils/api";
interface DashboardProps {}

const colors = [
  "#FC8A2E",
  "#4C68EF",
  "#36C3FC",
  "#50DFB2",
  "#FFCF56",
  "#F8333C",
  "#0F0326",
];

const dummyProjects: Project[] = new Array(6).fill({
  created: new Date().getTime(),
  key: "Ll0ddvaoabOEeefsd",
  name: "My Project",
  _id: "random id",
});

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>(dummyProjects);

  const loadProjects = async () => {
    const token = await getAccessTokenSilently();
    const response = await fetchUserProjects(token);
    const json = await response.json();

    setProjects(json.projects);
  };

  const copyProjectKey = (projectId: string) => {
    const project = projects.find(
      (project) => project._id === projectId
    ) as Project;

    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(project.key);
  };

  const regenerateProjectKey = async (projectId: string) => {
    const token = await getAccessTokenSilently();

    await regenerateUserProjectKey(projectId, token);

    loadProjects();
  };

  const createProject = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const token = await getAccessTokenSilently();
    const data = new FormData(ev.target as HTMLFormElement);

    const request = {
      name: data.get("name") as string,
    };

    await createUserProject(request, token);
    await loadProjects();

    setProjectModalOpen(false);
  };

  const deleteProject = async (projectId: string) => {
    const token = await getAccessTokenSilently();

    await deleteUserProject(projectId, token);

    loadProjects();
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div>
      <h1 className="text-left font-extrabold text-3xl">Hello, Nabil!</h1>
      <p>Your account has been active since May 12th, 2022.</p>

      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={project._id}
            color={colors[index % colors.length]}
            created={project.created}
            apiKey={project.key}
            name={project.name}
            regenerateProjectKey={regenerateProjectKey}
            deleteProject={deleteProject}
            copyProjectKey={copyProjectKey}
          />
        ))}

        <CreateProjectModal
          onSubmit={createProject}
          open={projectModalOpen}
          setOpen={setProjectModalOpen}
        ></CreateProjectModal>

        <button
          type="button"
          className="block mr-4 mt-4 rounded-xl text-white w-52 h-80 whitespace-nowrap relative group overflow-hidden flex flex-col justify-center items-center shadow-xl shadow-gray-200 hover:bg-white "
          onClick={() => setProjectModalOpen(true)}
        >
          <img src={plusIcon} alt="" role="presentation" className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
