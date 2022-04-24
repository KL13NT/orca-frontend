import { CSSProperties, FunctionComponent } from "react";

import { dateFormatter } from "../utils/dates";

interface ProjectCardProps {
  name: string;
  apiKey: string;
  created: number;
  color: string;
  id: string;
  // eslint-disable-next-line no-unused-vars
  copyProjectKey: (projectId: string) => void;
  // eslint-disable-next-line no-unused-vars
  regenerateProjectKey: (projectId: string) => void;
  // eslint-disable-next-line no-unused-vars
  deleteProject: (projectId: string) => void;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  name,
  apiKey,
  created,
  color,
  id,
  copyProjectKey,
  deleteProject,
  regenerateProjectKey,
}) => {
  const date = new Date(created);
  const dateString = dateFormatter.format(date);
  const style = { "--color": color } as CSSProperties;

  return (
    <div
      className="project-card p-8 mr-4 mt-4 rounded-xl text-white w-52 h-80 whitespace-nowrap relative group overflow-hidden shadow-xl shadow-gray-200"
      style={style}
    >
      <span
        className="block bg-white w-max rounded-xl flex justify-center items-center h-12 w-12 font-extrabold"
        style={{ color: color }}
      >
        {name[0]}
      </span>
      <h2 className="text-2xl font-extrabold mt-4 text-ellipsis overflow-hidden">
        {name}
      </h2>
      <div className="mt-8">
        <p className="text-base font-extralight">API Key</p>
        <p className="text-base font-extrabold mt-0 text-ellipsis overflow-hidden">
          {apiKey}
        </p>
      </div>
      <div className="mt-8">
        <p className="text-base font-extralight">Created</p>
        <p className="text-base font-extrabold mt-0">{dateString}</p>
      </div>

      <div className="translate-y-full group-hover:translate-y-0 flex transition-transform absolute w-full justify-center items-end left-0 bottom-0 p-2">
        <div className="flex flex-col items-center bg-white relative left-0 w-full text-black py-10 rounded-xl">
          <button
            className="text-base action-button"
            data-label="Copied"
            onClick={() => copyProjectKey(id)}
          >
            Copy Key
          </button>
          <button
            className="text-base mt-2.5 text-red-600"
            onClick={() => regenerateProjectKey(id)}
          >
            Generate New Key
          </button>
          <button
            className="text-base mt-2.5 text-red-600"
            onClick={() => deleteProject(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
