import { APIApplicationCommandInteraction, APIInteractionResponse } from "discord-api-types/v10";
import { SlashCommandBuilder } from "@discordjs/builders";

export const register = new SlashCommandBuilder().setName("ping").setDescription("pong's you back! (bot check)");

export const execute = async (interaction: APIApplicationCommandInteraction): Promise<APIInteractionResponse> => {
  return {
    type: 4,
    data: {
      content: `pong! ${interaction.member?.user.username}`,
    },
  };
};








