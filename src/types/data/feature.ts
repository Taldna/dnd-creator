export type Feature = {
  level?: number; // Some features (eg. racial traits) are not level-gated
  name: string;
  description: string | string[];
};