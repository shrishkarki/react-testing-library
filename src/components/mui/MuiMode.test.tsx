// import {render, screen } from "@testing-library/react";
// import { AppProviders } from "../../providers/AppProviders";
import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode",()=>{
    test("renders text correctly",()=>{
        // render(<MuiMode/>,{
        //     wrapper: AppProviders
        // })
        render(<MuiMode/>)
        const headingElement=screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    })
})