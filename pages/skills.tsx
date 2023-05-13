import { GetStaticProps } from "next";
import Container from "@/components/Container";
import { Nav, NavItem } from "@/components/Nav";
import Skill from "@/components/Skill";
import { loadSkills } from "@/utils/loadSkills";

const renderSkills = (skills: SkillModel[]) => (
  <div className="grid grid-cols-2 gap-8 py-8">
    {skills.map((skill, i) => (
      <Skill
        key={i}
        name={skill.name}
        progress={skill.progress}
        abilities={skill.abilities.map((ability) => ability.content)}
        experiences={skill.experiences.map((experience) => experience.content)}
      />
    ))}
  </div>
);

interface SkillsPageProps {
  skills: SkillModel[];
}

const SkillsPage = ({ skills }: SkillsPageProps) => (
  <div className="bg-gray-100">
    <Nav>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/skills" active>
        Skills
      </NavItem>
    </Nav>
    <Container>{renderSkills(skills)}</Container>
  </div>
);

export default SkillsPage;

export const getStaticProps: GetStaticProps<SkillsPageProps> = async () => ({
  props: {
    skills: await loadSkills(),
  },
});
