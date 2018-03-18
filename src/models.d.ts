declare interface IExperience {
  title: string;
  date: string;
}

declare interface ISkillGroup {
  title: string;
  secondaryTitle: string;
  items: ISkill[];
}

declare interface ISkill {
  name: string;
  progress: number;
}
