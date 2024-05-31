# NextJS Discord Bot

<p align="center"><img src="/public/logo.svg" width="300"></p>


Yes, free fully functional rest-api discord bot can be made using nextjs 🤯


# Getting Started

- [**Invite this Bot to your server**](https://main.d1hgvr9oqd1hde.amplifyapp.com/)
- [**Documentation Link 📃**](https://mmv-docs.vercel.app/docs/nextjs-discord-bot-template/getting-started)

### 1. Installation

- Clone Repository
- Fill out environment variables
  - you can get these on your [**Discord > Developer > Application**](https://discord.com/developers/applications)

```js
NEXT_PUBLIC_CLIENT_APPLICATION_ID=
PUBLIC_KEY=
BOT_TOKEN=

//  This is the key to register your commands, you can set this to anything make sure it is secure
REGISTER_COMMANDS_KEY=
```

### 2. Deploy

- Where to deploy?
  - ✅ AWS Amplify
    - where the current deployment is
  - ❌ Vercel
    - for some reason the `req.body` is always empty in the `interactions` route when deployed on vercel
    - if you know how to fix this please open up a PR
  - Please open up a PR if you know other deployment options

### 3. Add Interaction Endpoint

After deploying you will have your url

- goto https://discord.com/developers/applications
- then scroll to into "INTERACTIONS ENDPOINT URL"
  ![Add Intercation Endpoint URL](https://github.com/mmvergara/nextjs-discord-bot-boilerplate/assets/104471209/8e83108c-058c-41a6-afd6-924d18baef2f)

- Example
  > https://main.d1hgvr9oqd1hde.amplifyapp.com/api/discord-bot/interactions

### 4. Register Commands

Open your deployment website, fill and submit the `REGISTER_COMMANDS_KEY` you set earlier in the environment variables to register your commands.

_Alternative way of registering command in
[Discord Documentation](https://discord.com/developers/docs/interactions/application-commands#endpoints)_

### 5. Invite your discord bot

- Open your deployment website and click "Invite Discord Bot" then your done!
  - the link has the necessary required permissions to run the bot

### 6. Adding your own Slash Commands

- [Documentation](https://mmv-docs.vercel.app/docs/nextjs-discord-bot-boilerplate/adding-slash-commands)
