import { RESTGetAPIApplicationCommandsResult } from "discord.js";
import { BOT_TOKEN, CLIENT_APPLICATION_ID } from "../config";
import axios, { AxiosResponse } from "axios";

export const discord_api = axios.create({
  baseURL: "https://discord.com/api/",
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Authorization",
    Authorization: `Bot ${BOT_TOKEN}`,
  },
});

export const fetchBotCommands = async () => {
  return (await discord_api.get(
    `/applications/${process.env.CLIENT_ID}/commands`
  )) as AxiosResponse<RESTGetAPIApplicationCommandsResult>;
};
