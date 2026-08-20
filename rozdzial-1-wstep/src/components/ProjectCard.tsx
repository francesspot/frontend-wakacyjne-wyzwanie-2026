import { useState } from "react";

export interface Technology {
  id: string;
  name: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
}

function ProjectCard(props: ProjectCardProps) {
  const [status, setStatus] = useState("W trakcie");

  return (
    <div className="bg-sky-50 border border-gray-200 rounded-xl p-8 shadow-md w-full max-w-md text-left mt-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{props.title}</h3>
      <p className="text-gray-600 mb-6">{props.description}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Technologie:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {props.technologies.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-6">
        <p className="text-gray-800">
          <strong>Status:</strong>{" "}
          <span
            className={
              status === "W trakcie"
                ? "text-orange-500 font-semibold"
                : "text-green-500 font-semibold"
            }
          >
            {status}
          </span>
        </p>

        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-5 rounded-lg transition-colors"
          onClick={() =>
            setStatus(status === "W trakcie" ? "Ukończony" : "W trakcie")
          }
        >
          Zmień status
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
