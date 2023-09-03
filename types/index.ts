import type { APIApplicationCommandInteraction, APIInteractionResponse, Interaction } from "discord.js";
export type executeCommand = (
  interaction: APIApplicationCommandInteraction
) => Promise<APIInteractionResponse>;
