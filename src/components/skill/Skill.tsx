import { useState } from "react";
import { SkillsProps } from "./Skills.types";

const Skill = (props: SkillsProps) => {
    const [isLogin,setIslogin]=useState<boolean>(false)
  const { skills } = props;

  return (
    <>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      {
        isLogin ?(<button>Start Learning</button>):(<button onClick={()=>setIslogin(true)}>Login</button>)
      }
    </>
  );
};
export default Skill;
