import { join } from "path";
import { cwd } from "process";
import { loadYAML } from "./loadYAML";

export const loadSkills = () =>
  loadYAML(join(cwd(), "yaml", "skills.yaml")) as Promise<SkillModel[]>;
