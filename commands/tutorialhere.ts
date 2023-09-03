import { SlashCommandBuilder } from "@discordjs/builders";
import { executeCommand } from "@/types";

// to add a command go to ./commands folder and create a new ts file

// the command title/name should match the command.ts file for
//      ex. for tutorialhere command you should name the file tutorialhere.ts

// Don't change register and execute variable names
export const register = new SlashCommandBuilder()
  .setName("tutorialhere")
  .setDescription("description of your command");

export const execute: executeCommand = async (interaction) => {
  // You have access to do interaction object
  // https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object

  // Do your bot logic here
  // You can even connect to a database

  // you should return a APIInteractionResponse
  // https://discord-api-types.dev/api/discord-api-types-v10#APIApplicationCommandInteraction
  return {
    type: 4,
    data: {
      content: `Hello World! ${interaction.member?.user.username}`,
    },
  };
};
