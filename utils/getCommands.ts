import { SlashCommandBuilder } from "@discordjs/builders";
import { executeCommand } from "../types";
import { resolve } from "path";
import getTsFiles from "./getTsFiles";

type commandModule = {
  execute: executeCommand;
  register: SlashCommandBuilder;
};

let seenCommands: {
  [key: string]: commandModule;
} | null = null;

const getCommands = async () => {
  if (seenCommands) return seenCommands;
  const commandDir = resolve(process.cwd(), "commands");
  const commandFiles = getTsFiles(commandDir);
  const commands: { [key: string]: commandModule } = {};
  for (const file of commandFiles) {
    try {
      const fileContents = (await import(
        "../commands/" + file
      )) as commandModule;
      if (fileContents) commands[file] = fileContents;
    } catch (error) {
      continue;
    }
  }
  seenCommands = commands;
  return commands;
};

export default getCommands;
