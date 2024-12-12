import Skill from "./Skill";
import { render, screen } from "@testing-library/react";

describe('Skills',()=>{
    const skills=['HTML','CSS']
    test("Render skills correctly",()=>{
        render(<Skill skills={skills}/>)
        const listElement=screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test('renders a list of skills',()=>{
        render(<Skill skills={skills}/>)
        const listElements=screen.getAllByRole("listitem");
        expect(listElements).toHaveLength(skills.length)
    })
})

