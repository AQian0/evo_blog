import { object, string, array, optional } from "valibot";

export type Icon = {
  prefix: string;
  name: string;
};

export type Skill = {
  name: string;
  icon?: Icon;
  url?: string;
};

export type Kind = {
  name: string;
  skills: Array<Skill>;
};

export const iconSchema = object({
  prefix: string(),
  name: string(),
});

export const skillSchema = object({
  name: string(),
  icon: optional(iconSchema),
  url: optional(string()),
});

export const kindSchema = object({
  name: string(),
  skills: array(skillSchema),
});
