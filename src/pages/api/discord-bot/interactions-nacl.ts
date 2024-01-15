import {
  APIApplicationCommandInteraction,
  APIInteraction,
  APIInteractionResponse,
  InteractionType,
} from "discord-api-types/v10";
import nacl from "tweetnacl";
import type { NextApiRequest, NextApiResponse } from "next";
import { verifyKey } from "discord-interactions";
import { PUBLIC_KEY } from "@/config";
import getCommands from "@/utils/getCommands";
import allowedMethod from "@/utils/check-method";
import { rawBodyToString } from "@/utils/body-parser";
import { execute } from "@/commands/ping";
type TokenHeader = string | Uint8Array | ArrayBuffer | Buffer;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check method
  if (!allowedMethod(req, "POST"))
    return res.status(401).end("Method not allowed");
  try {
    console.log(req.headers);
    // Verify discord request
    const signature = req.headers["X-Signature-Ed25519"] as string;
    const timestamp = req.headers["X-Signature-Ed25519"] as TokenHeader;
    console.log(req.body);
    const rawBody = await rawBodyToString(req);
    console.log(rawBody)
    const isValid = nacl.sign.detached.verify(
      Buffer.from(timestamp + rawBody),
      Buffer.from(signature, "hex"),
      Buffer.from(PUBLIC_KEY, "hex")
    );
    

    if (!isValid) {
      return res.status(401).end("invalid request");
    }
    console.log("**VALID REQUEST**");

    // Parse body to get interaction data
    const interactionNew = JSON.parse(rawBody) as APIInteraction;

    // Check if the interaction type is a ping
    // PING message, respond with ACK (part of Discord's security and authorization protocol)
    if (interactionNew.type === InteractionType.Ping)
      return res.status(200).json({ type: 1 });

    // If the interaction type is not a ping it is assumed to be a application command
    const interaction = interactionNew as APIApplicationCommandInteraction;

    // get all commands
    const allCommands = await getCommands();

    // execute command
    let reply: APIInteractionResponse | null = null;
    // const commandName = interaction.data.name + ".ts";
    // if (allCommands[commandName]) {
    reply = await execute(interaction);
    // }

    if (!reply) throw new Error();
    return res.status(200).json(reply);
  } catch (error: any) {
    console.log(error);
    console.log("SOMETHING WENT WRONG");
    return res.status(400).send({
      type: 4,
      data: { content: "Something wen't wrong performing that command" },
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
