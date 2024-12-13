import { start } from "repl";
import Skill from "./Skill";
import { logRoles, render, screen } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "js", "react"];
  test("Render skills correctly", () => {
    render(<Skill skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skill skills={skills} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });
  test("renders Login Button", () => {
    render(<Skill skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  //queryBy.....

  test("start rendering button is not rendered", () => {
    render(<Skill skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  //findBy
  test("start learning button is render", async () => {
    const view=render(<Skill skills={skills} />);
    logRoles(view.container);
    // screen.debug();
    const startLButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLButton).toBeInTheDocument();
  });
});
