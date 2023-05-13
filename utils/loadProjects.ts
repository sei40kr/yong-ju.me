import { join } from "path";
import { cwd } from "process";
import { loadYAML } from "./loadYAML";

export const loadProjects = () =>
  loadYAML(join(cwd(), "yaml", "projects.yaml")) as Promise<ProjectModel[]>;
