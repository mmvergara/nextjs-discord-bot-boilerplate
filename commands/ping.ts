import { InteractionResponseType } from "discord-interactions";
import { APIApplicationCommandInteraction } from "discord-api-types/v10";

export const deleteLinkCommand = async (interaction: APIApplicationCommandInteraction, res: any) => {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `PONG`,
    },
  });
};
