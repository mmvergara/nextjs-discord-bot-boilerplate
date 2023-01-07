# Nextjs Discord Bot Template

Release Date: January 6, 2023
Yes, free fully functional discord bot can be made using nextjs 🤯

## Demo

Live: https://mmv-nextjs-discord-bot-template.vercel.app/
[Add BOT to your discord Server](https://discord.com/api/oauth2/authorize?client_id=1060978886378266736&permissions=277025445888&scope=bot%20applications.commands)

## Documentation

soon...

## Installation

### Fill out environment variables

you can get these on your Discord > Developer > application as usual

```js
CLIENT_APPLICATION_ID=
PUBLIC_KEY=
BOT_TOKEN=
REGISTER_COMMANDS_KEY=
```

### Deploy

After that you are ready to deploy your project in platforms life [vercel](https://vercel.com/)

### Register Commands

Open your deployment website, fill and submit the `REGISTER_COMMANDS_KEY` on the form UI to register your commands

Alternative way of registering command in
[Discord Documentation](https://discord.com/developers/docs/interactions/application-commands#endpoints)

### Invite your discord bot
Open your deployment website and click invite to discord bot or do
`https://discord.com/api/oauth2/authorize?client_id=<YOUR_BOT_CLIENT_ID_HERE>&permissions=277025445888&scope=bot%20applications.commands`


### Test your bot
do `/ping` or `/help`