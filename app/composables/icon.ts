const LANGUAGE_MAP = {
  json: "JSON",
  js: "JavaScript",
  ts: "TypeScript",
  html: "HTML",
  css: "CSS",
  vue: "Vue",
  sh: "Shell",
  mdc: "Markdown",
  md: "Markdown",
  yaml: "YAML",
} as const;

type LanguageKey = keyof typeof LANGUAGE_MAP;

const isLanguageKey = (key: string): key is LanguageKey => {
  return key in LANGUAGE_MAP;
};

export const useLanguageIcon = (extName: string): string => {
  if (!isLanguageKey(extName)) {
    return `i-ri-file-unknow-line`;
  }
  return `i-catppuccin-${LANGUAGE_MAP[extName].toLowerCase()}`;
};
