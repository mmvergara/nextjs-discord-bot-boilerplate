import { APIApplicationCommandInteraction, APIInteractionResponse } from "discord-api-types/v10";
import { SlashCommandBuilder } from "@discordjs/builders";

export const register = new SlashCommandBuilder()
  .setName("calculate")
  .setDescription("Calculate a math expression for you")
  .addStringOption((option) =>
    option.setName("math_expression").setDescription("Insert Math Expression").setRequired(true)
  );

export const execute = async (interaction: APIApplicationCommandInteraction): Promise<APIInteractionResponse> => {
  return {
    type: 4,
    data: {
      content: `pong! ${interaction.member?.user.username}`,
    },
  };
};
