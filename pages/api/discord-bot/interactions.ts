import { APIApplicationCommandInteraction, APIInteractionResponse } from "discord-api-types/v10";
import type { NextApiRequest, NextApiResponse } from "next";
import { rawBodyToString } from "utils/body-parser";
import { PUBLIC_KEY } from "config";
import { verifyKey } from "discord-interactions";
import getCommands from "utils/getCommands";
import allowedMethod from "utils/error-handling";

export default async function handler(req: NextApiRequest, res: NextApiResponse<APIInteractionResponse>) {
  try {
    // Check method
    if (!allowedMethod(req, "POST")) throw new Error("Method not allowed");

    // Verify discord request
    const signature = req.headers["x-signature-ed25519"] as string | Uint8Array | ArrayBuffer | Buffer;
    const timestamp = req.headers["x-signature-timestamp"] as string | Uint8Array | ArrayBuffer | Buffer;
    const rawBody = await rawBodyToString(req);
    const isValid = verifyKey(rawBody, signature, timestamp, PUBLIC_KEY);
    if (!isValid) return res.status(400);

    // Parse body to get interaction data
    const interaction = JSON.parse(rawBody) as APIApplicationCommandInteraction;

    // get all commands
    const allCommands = await getCommands();

    // execute command
    let reply: APIInteractionResponse | null = null;
    const commandName = interaction.data.name + ".ts";
    if (allCommands[commandName]) {
      reply = await allCommands[commandName].execute(interaction);
    }
    console.log(reply?.type)
    if (!reply) throw new Error();
    return res.status(200).json(reply);
  } catch (error) {
    return res.status(500).send({ type: 4, data: { content: "Something wen't wrong performing that command" } });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};


