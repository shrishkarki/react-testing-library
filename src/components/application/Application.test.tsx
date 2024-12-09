import { render, screen } from "@testing-library/react";
import Application from "./Application";
import { clearScreenDown } from "readline";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />); //create V-DOM

    // getByRole
    const pageHeading = screen.getByRole("heading", { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    // getByLabelText
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    //getByPlaceholderText
    const nameElement3=screen.getByPlaceholderText("FullName");
    expect(nameElement3).toBeInTheDocument();

    //getByText
    const paragraphElement=screen.getByText("All Fields Are Mandatory");
    expect(paragraphElement).toBeInTheDocument();

    //getByDisplayValue
    const nameElement4=screen.getByDisplayValue("Shrish");
    expect(nameElement4).toBeInTheDocument();

    //getByAltText
    const imageElement = screen.getByAltText("a person with laptop");
    expect(imageElement).toBeInTheDocument();

    //getByTitle
    const closeElement=screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //getByTestId
    const customElement = screen.getByTestId("customHtml");
    expect(customElement).toBeInTheDocument();
  });

});

