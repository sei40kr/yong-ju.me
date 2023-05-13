interface SkillModel {
  name: string;
  progress: "beginner" | "intermediate" | "advanced";
  abilities: Array<{ content: string }>;
  experiences: Array<{ content: string }>;
}
