import { CLIENT_APPLICATION_ID, REGISTER_COMMANDS_KEY } from "@/config";
import { discord_api } from "@/utils/discord-api";
import type { NextApiRequest, NextApiResponse } from "next";
import getCommands from "@/utils/getCommands";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.query?.REGISTER_COMMANDS_KEY !== REGISTER_COMMANDS_KEY)
      throw new Error();
    const allCommands = await getCommands();
    const arrOfSlashCommandsRegister = Object.values(allCommands);
    const arrOfSlashCommandsRegisterJSON = arrOfSlashCommandsRegister.map(
      (command) => command.register.toJSON()
    );

    const registerCommands = await discord_api.put(
      `/applications/${CLIENT_APPLICATION_ID}/commands`,
      arrOfSlashCommandsRegisterJSON
    );

    console.log("== COMMANDS REGISTERED ===");
    console.log(registerCommands.data);
    console.log("== COMMANDS REGISTERED ===");

    res.status(201).json({ error: null });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ error: "Error Occured or wrong REGISTER_COMMANDS_KEY" });
  }
}
