export type Icon = {
  prefix: string;
  name: string;
}

export type Skill = {
  name: string;
  icon?: Icon;
  url?: string;
};
export type Kind = {
  name: string;
  skills: Skill[];
};
