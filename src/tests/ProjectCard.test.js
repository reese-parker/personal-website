import { cleanup, render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";
import projects from "../data/projectsData";

afterEach(() => {
  cleanup();
});

const project = projects[0];

test("should render ProjectCard component", () => {
  render(
    <ProjectCard
      name={project.name}
      technologies={project.technologies}
      description={project.description}
      projectLink={project.projectLink}
      githubLink={project.githubLink}
    />
  );

  const projectCardElement = screen.getByTestId(`projectCard-${project.name}`);
  expect(projectCardElement).toBeInTheDocument();
});

test("should link to GitHub", () => {
  render(
    <ProjectCard
      name={project.name}
      technologies={project.technologies}
      description={project.description}
      projectLink={project.projectLink}
      githubLink={project.githubLink}
    />
  );

  const githubLinkElement = screen.getByTestId(
    `githubLink-${project.githubLink}`
  );
  expect(githubLinkElement).toHaveAttribute("href", project.githubLink);
});

test("should link to project", () => {
  render(
    <ProjectCard
      name={project.name}
      technologies={project.technologies}
      description={project.description}
      projectLink={project.projectLink}
      githubLink={project.githubLink}
    />
  );

  const projectLinkElement = screen.getByTestId(
    `projectLink-${project.projectLink}`
  );
  expect(projectLinkElement).toHaveAttribute("href", project.projectLink);
});

test("should join project technologies", () => {
  project.technologies = ["Tech1", "Tech2", "Tech3"];

  render(
    <ProjectCard
      name={project.name}
      technologies={project.technologies}
      description={project.description}
      projectLink={project.projectLink}
      githubLink={project.githubLink}
    />
  );

  const technologiesElement = screen.getByTestId(
    `technologies-${project.name}`
  );
  expect(technologiesElement).toHaveTextContent(
    "Built with: Tech1, Tech2, Tech3"
  );
});
