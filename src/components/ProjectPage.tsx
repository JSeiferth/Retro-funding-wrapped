import React from 'react';
import { useParams } from 'react-router-dom';
import RetroFundingWrapped from './RetroFundingWrapped';
import allProjects from '../../projects.json'; // Your generated project configs
import { AppConfig } from '../config';
import { generateSlides } from '../config';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Find the project config from your dataset
  const projectConfig: AppConfig | undefined = allProjects.find(
    (project) => project.projectId === projectId
  );

  if (!projectConfig) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg">
          We couldn’t find the project with ID: <span className="font-mono">{projectId}</span>
        </p>
        <a href="/" className="mt-6 text-blue-500 underline">
          Go back to homepage
        </a>
      </div>
    );
  }

  // Generate the slides with the project config and projectId
  const slides = generateSlides(projectConfig, projectId || '');

  return <RetroFundingWrapped slides={slides} />;
};

export default ProjectPage;

