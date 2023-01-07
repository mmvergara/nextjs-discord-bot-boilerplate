// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CLIENT_APPLICATION_ID } from "config";
import { discord_api } from "services/discord-api";
import getCommands from "utils/getCommands";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allCommands = await getCommands();
    const arrOfSlashCommandsRegister = Object.values(allCommands);
    const arrOfSlashCommandsRegisterJSON = arrOfSlashCommandsRegister.map((command) => command.register.toJSON());

    const registerCommands = await discord_api.put(
      `/applications/${CLIENT_APPLICATION_ID}/commands`,
      arrOfSlashCommandsRegisterJSON
    );

    res.status(200).json({ message: "Command Registered :)", commands: registerCommands.data });
  } catch (error) {
    res.status(500).json({ name: "John Doe" });
  }
}
