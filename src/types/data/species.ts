import type { Feature } from "./feature";

export type Species = {
  name: string;
  description: string[];
  features: Feature[];
  fullImage?: string;
  icon?: string;
  lineage?: string[]; // eg: "Drow", "High Elf", "Wood Elf"
};
