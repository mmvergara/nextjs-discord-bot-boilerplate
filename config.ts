if (!process.env.NEXT_PUBLIC_APPLICATION_ID)
  throw new Error("APPLICATION_ID is not set");
if (!process.env.BOT_TOKEN) throw new Error("BOT_TOKEN is not set");
if (!process.env.PUBLIC_KEY) throw new Error("PUBLIC_KEY is not set");
if (!process.env.REGISTER_COMMANDS_KEY)
  throw new Error("REGISTER_COMMANDS_KEY is not set");

export const CLIENT_APPLICATION_ID = process.env.NEXT_PUBLIC_APPLICATION_ID!;
export const BOT_TOKEN = process.env.BOT_TOKEN!;
export const PUBLIC_KEY = process.env.PUBLIC_KEY!;
export const REGISTER_COMMANDS_KEY = process.env.REGISTER_COMMANDS_KEY!;
