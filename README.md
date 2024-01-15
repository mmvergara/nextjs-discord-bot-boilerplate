# Getting Started

Yes, free fully functional rest-api discord bot can be made using nextjs 🤯

- [**Invite this Bot to your server**](https://main.d1hgvr9oqd1hde.amplifyapp.com/)
- [**Documentation Link 📃**](https://mmv-docs.vercel.app/docs/nextjs-discord-bot-template/getting-started)

## 1. Installation

### Fill out environment variables

you can get these on your [**Discord > Developer**](https://discord.com/developers/applications) > application

```js
NEXT_PUBLIC_CLIENT_APPLICATION_ID=
PUBLIC_KEY=
BOT_TOKEN=
REGISTER_COMMANDS_KEY=
```

### Deploy

After that you are ready to deploy your project in platforms like [vercel](https://vercel.com/)

### Add Interaction Endpoint

After deploying you will have your url

- goto https://discord.com/developers/applications
- then scroll to into "INTERACTIONS ENDPOINT URL"
  ![Add Intercation Endpoint URL](https://github.com/mmvergara/nextjs-discord-bot-boilerplate/assets/104471209/8e83108c-058c-41a6-afd6-924d18baef2f)

- Example
  > https://mmv-nextjs-discord-bot-boilerplate.vercel.app/api/discord-bot/interactions

### Register Commands

Open your deployment website, fill and submit the `REGISTER_COMMANDS_KEY` on the form UI to register your commands

Alternative way of registering command in
[Discord Documentation](https://discord.com/developers/docs/interactions/application-commands#endpoints)

### Invite your discord bot

Open your deployment website and click "Invite Discord Bot" then your done!

## [Adding your own Slash Commands](https://mmv-docs.vercel.app/docs/nextjs-discord-bot-boilerplate/adding-slash-commands)
