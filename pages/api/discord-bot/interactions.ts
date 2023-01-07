import {
  APIApplicationCommandInteraction,
  APIInteraction,
  APIInteractionResponse,
  InteractionType,
} from "discord-api-types/v10";
import type { NextApiRequest, NextApiResponse } from "next";
import { rawBodyToString } from "utils/body-parser";
import { PUBLIC_KEY } from "config";
import { verifyKey } from "discord-interactions";
import getCommands from "utils/getCommands";
import allowedMethod from "utils/error-handling";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check method
  if (!allowedMethod(req, "POST")) return res.status(401).end("Method not allowed");

  try {
    // Verify discord request
    const signature = req.headers["x-signature-ed25519"] as string | Uint8Array | ArrayBuffer | Buffer;
    const timestamp = req.headers["x-signature-timestamp"] as string | Uint8Array | ArrayBuffer | Buffer;
    const rawBody = await rawBodyToString(req);
    const isValid = verifyKey(rawBody, signature, timestamp, PUBLIC_KEY);
    if (!isValid) return res.status(401).end("invalid request");

    // Parse body to get interaction data
    const interactionNew = JSON.parse(rawBody) as APIInteraction;

    // Check if the interaction type is a ping
    // PING message, respond with ACK (part of Discord's security and authorization protocol)
    if (interactionNew.type === InteractionType.Ping) return res.status(200).json({ type: 1 });

    // If the interaction type is not a ping it is assumed to be a application command
    const interaction = interactionNew as APIApplicationCommandInteraction;

    // get all commands
    const allCommands = await getCommands();

    // execute command
    let reply: APIInteractionResponse | null = null;
    const commandName = interaction.data.name + ".ts";
    if (allCommands[commandName]) {
      reply = await allCommands[commandName].execute(interaction);
    }

    if (!reply) throw new Error();
    return res.status(200).json(reply);
  } catch (error: any) {
    console.log(error);
    console.log("SOMETHING WENT WRONG");
    return res.status(400).send({ type: 4, data: { content: "Something wen't wrong performing that command" } });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
