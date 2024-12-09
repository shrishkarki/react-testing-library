import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test.skip("testing Greet Component",()=>{
    render(<Greet/>)
    const linkElement=screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
})