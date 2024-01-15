import { SlashCommandBuilder } from "@discordjs/builders";
import { executeCommand } from "@/types";

export const register = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("pong's you back! (bot check)");

  
export const execute: executeCommand = async (interaction) => {
  return {
    type: 4,
    data: {
      content: `pong! ${interaction.member?.user.username}`,
    },
  };
};
