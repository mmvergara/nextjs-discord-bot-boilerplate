# NextJS Discord Bot

[**`🤖 Invite this Bot to your server`**](https://mmv-nextjs-discord-bot-boilerplate.vercel.app/) <br/>
[**`📚 Documentation`**](https://mmv-docs.vercel.app/docs/nextjs-discord-bot-template/getting-started)

<p align="center"><img src="/public/logo-new.svg" width="300"></p>

Yes, free fully functional rest-api discord bot 🤖 can be made using nextjs 🤯 🚀

I have done all of the abstraction for you, so you can focus on building your bot 🛠️

- ✅ Easy Command Building
- ✅ Easy Command Registration
- ✅ Easy Deployment

# Getting Started

### 1. Installation

- Clone Repository
- Fill out environment variables
  - you can get these on your [**Discord > Developer > Application**](https://discord.com/developers/applications)

```env
NEXT_PUBLIC_APPLICATION_ID=
PUBLIC_KEY=
BOT_TOKEN=


# Custom secret key to register your commands
REGISTER_COMMANDS_KEY=
```

### 2. Adding your own Slash Commands

- Just go to `./commands/tutorialhere.ts` after cloning and you will see the template for creating a command
  - [In-Depth - Documentation](https://mmv-docs.vercel.app/docs/nextjs-discord-bot-boilerplate/adding-slash-commands)

### 3. Deploy

- Since this is a nextjs project, you can deploy it to vercel for free

### 4. Add Interaction Endpoint

After deploying you will have your url

- goto https://discord.com/developers/applications
- then scroll to into "INTERACTIONS ENDPOINT URL"
  ![Add Intercation Endpoint URL](https://github.com/mmvergara/nextjs-discord-bot-boilerplate/assets/104471209/8e83108c-058c-41a6-afd6-924d18baef2f)

- Example
  > https://mmv-nextjs-discord-bot-boilerplate.vercel.app/api/discord-bot/interactions

### 5. Register Commands

Open your deployment website, fill and submit the `REGISTER_COMMANDS_KEY` you set earlier in the environment variables to register your commands.

_Alternative way of registering command in
[Discord Documentation](https://discord.com/developers/docs/interactions/application-commands#endpoints)_

### 6. Invite your discord bot

- Open your deployment website and click "Invite Discord Bot" then your done!
  - the link has the necessary required permissions to run the bot
