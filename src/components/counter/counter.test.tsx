import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const inrButton = screen.getByRole("button", { name: "Increament" });
    expect(inrButton).toBeInTheDocument();
  });

  test("Renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increament button", async () => {
    userEvent.setup();
    render(<Counter />);
    const increamentBtn = screen.getByRole("button", {
      name: "Increament",
    });
    await userEvent.click(increamentBtn);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increament twice", async () => {
    userEvent.setup();
    render(<Counter />);
    const increamentBtn = screen.getByRole("button", {
      name: "Increament",
    });
    // await userEvent.click(increamentBtn);
    await userEvent.dblClick(increamentBtn);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

   test("renders the count of 10 after clicking the set button",async ()=>{
    userEvent.setup();
    render(<Counter/>)
    const amountInput=screen.getByRole("spinbutton")
    await userEvent.type(amountInput,"10");

    expect(amountInput).toHaveValue(10);
    const setButton=screen.getByRole("button",{
        name:"Set"
    })
    await userEvent.click(setButton);
     const countElement=screen.getByRole("heading");
     expect(countElement).toHaveTextContent("10")
   })

   test("elements are focused in the right order",async()=>{
    userEvent.setup();
    render(<Counter/>)
    const increamentBtn=screen.getByRole("button",{
        name:"Increament"
    })
    const amountInput=screen.getByRole('spinbutton');
    const setButton=screen.getByRole("button",{
        name:"Set"
    })
    await userEvent.tab();
    expect(increamentBtn).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    await userEvent.tab();
    expect(setButton).toHaveFocus();
   })
});
