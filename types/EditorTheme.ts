export type ThemeOption =
  | "css-variables"
  | "dark-plus"
  | "dracula-soft"
  | "dracula"
  | "github-dark-dimmed"
  | "github-dark"
  | "github-light"
  | "hc_light"
  | "light-plus"
  | "material-darker"
  | "material-default"
  | "material-lighter"
  | "material-ocean"
  | "material-palenight"
  | "min-dark"
  | "min-light"
  | "monokai"
  | "nord"
  | "one-dark-pro"
  | "poimandres"
  | "rose-pine-dawn"
  | "rose-pine-moon"
  | "rose-pine"
  | "slack-dark"
  | "slack-ochin"
  | "solarized-dark"
  | "solarized-light"
  | "vitesse-dark"
  | "vitesse-light";

export type EditorTheme = {
  title: string;
  code: ThemeOption;
  id: number;
  bg: string;
};
