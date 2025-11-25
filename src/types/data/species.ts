import type { Feature } from "./feature";

export type Species = {
  name: string;
  description: string;
  features: Feature[];
  image?: string;
  lineage?: string; // eg: "Drow", "High Elf", "Wood Elf"
};
