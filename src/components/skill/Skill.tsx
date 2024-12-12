import { SkillsProps } from "./Skills.types";

const Skill = (props: SkillsProps) => {
  const { skills } = props;

  return (
    <>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </>
  );
};
export default Skill;
