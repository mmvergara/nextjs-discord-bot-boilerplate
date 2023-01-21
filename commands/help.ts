import {
  APIApplicationCommandInteraction,
  APIInteractionResponse,
  RESTGetAPIApplicationCommandsResult,
} from "discord-api-types/v10";
import { CLIENT_APPLICATION_ID } from "config";
import { SlashCommandBuilder } from "@discordjs/builders";
import { AxiosResponse } from "axios";
import { discord_api } from "services/discord-api";

export const register = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Returns a list of registered commands");

export const execute = async (interaction: APIApplicationCommandInteraction): Promise<APIInteractionResponse> => {
  const fetchCommands = (await discord_api.get(
    `/applications/${CLIENT_APPLICATION_ID}/commands`
  )) as AxiosResponse<RESTGetAPIApplicationCommandsResult>;
  const fields = fetchCommands.data.map((c) => {
    return { name: "/" + c.name, value: c.description + "\n \u200b" };
  });
  console.log({});
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
