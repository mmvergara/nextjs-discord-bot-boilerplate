import axios from "axios";
import { BOT_TOKEN } from "../config";

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
