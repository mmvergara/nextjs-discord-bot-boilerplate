import { APIApplicationCommandInteraction, APIInteractionResponse } from "discord-api-types/v10";
import { SlashCommandBuilder } from "@discordjs/builders";
import { resolve } from "path";
import getTsFiles from "./getTsFiles";

type commandModule = {
  execute: (interaction: APIApplicationCommandInteraction) => Promise<APIInteractionResponse>;
  register: SlashCommandBuilder;
};

const getCommands = async () => {
  const commandDir = resolve(process.cwd(), "pages", "api", "discord-bot", "commands");
  const commandFiles = getTsFiles(commandDir);
  const commands: { [key: string]: commandModule } = {};
  for (const file of commandFiles) {
    try {
      const fileContents = (await import("../pages/api/discord-bot/commands/" + file)) as commandModule;
      if (fileContents) commands[file] = fileContents;
    } catch (error) {
      continue;
    }
  }
  return commands;
};

export default getCommands;
