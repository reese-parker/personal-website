// import {render, screen, cleanup} from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard"

test('test', () => {
    expect(true).toBe(true);
})

test("should render ProjectCard component", () => {
    render(<ProjectCard />);
    const projectCardElement = screen.getByTestId("projectCard");
    expect(projectCardElement).toBeInTheDocument();
})