if (!process.env.CLIENT_APPLICATION_ID) throw new Error("APPLICATION_ID is not set");
if (!process.env.BOT_TOKEN) throw new Error("BOT_TOKEN is not set");
if (!process.env.PUBLIC_KEY) throw new Error("PUBLIC_KEY is not set");
// if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not set");

export const CLIENT_APPLICATION_ID = process.env.CLIENT_APPLICATION_ID;
export const BOT_TOKEN = process.env.BOT_TOKEN;
export const PUBLIC_KEY = process.env.PUBLIC_KEY;


// https://discord.com/api/oauth2/authorize?client_id=1060978886378266736&permissions=274877963264&scope=bot