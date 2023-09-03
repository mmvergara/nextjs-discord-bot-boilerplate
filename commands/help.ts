import { SlashCommandBuilder } from "@discordjs/builders";
import { fetchBotCommands } from "@/utils/discord-api";
import type { executeCommand } from "@/types";

export const register = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Returns a list of registered commands");

export const execute: executeCommand = async (interaction) => {
  // Fetch the registered commands from discord api
  const commandsList = await fetchBotCommands();

  // Format
  const fields = commandsList.data.map((c) => {
    return { name: "/" + c.name, value: c.description + "\n \u200b" };
  });

  return {
    type: 4,
    data: {
      embeds: [
        {
          color: 0x34d9d9,
          title: "Here are the list of registered commands \n \u200b",
          fields: fields,
        },
      ],
    },
  };
};
