import {
  APIApplicationCommandInteraction,
  APIInteraction,
  APIInteractionResponse,
  InteractionType,
} from "discord-api-types/v10";
import type { NextApiRequest, NextApiResponse } from "next";
import { verifyKey } from "discord-interactions";
import { PUBLIC_KEY } from "@/config";
import getCommands from "@/utils/getCommands";
import allowedMethod from "@/utils/check-method";
import { rawBodyToStringTwo } from "@/utils/body-parser";
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
    const signature = req.headers["x-signature-ed25519"] as TokenHeader;
    const timestamp = req.headers["x-signature-timestamp"] as TokenHeader;
    console.log(JSON.stringify(req.body));
    const isValid = verifyKey(
      JSON.stringify(req.body),
      signature,
      timestamp,
      PUBLIC_KEY
    );
    console.log(req);
    if (!isValid) {
      console.log(req);
      console.log("INVALID REQUEST");
      return res.status(401).end("invalid request");
    }

    // Parse body to get interaction data
    const interactionNew = req.body as APIInteraction;

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
    const commandName = interaction.data.name + ".ts";
    if (allCommands[commandName]) {
    reply = await execute(interaction);
    }

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

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
