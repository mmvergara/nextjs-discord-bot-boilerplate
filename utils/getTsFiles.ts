import { readdirSync } from "fs";

export default function getTsFiles(dir: string) {
  const files = readdirSync(dir).filter((file) => file.endsWith(".ts"));
  return files;
}
