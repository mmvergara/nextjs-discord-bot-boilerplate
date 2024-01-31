"use client";
import axios from "axios";
import { FormEvent, useState } from "react";

export default function Home() {
    const [registerCommandsKey, setRegisterCommandsKey] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const handleRegisterCommand = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setStatus("Loading...");
            if (registerCommandsKey.length > 0) {
                await axios.get(
                    `/api/discord-bot/register-commands?REGISTER_COMMANDS_KEY=${registerCommandsKey}`
                ).catch((err) => console.log(err))
            }
            setStatus("Commands registered!");
        } catch (error: any) {
            console.log(error.message)
            setStatus("Something went wrong. Check the console for errors")
        }
    }

    return (
        <main>
            <h1>Nextjs Discord Bot Boilerplate</h1>
        <a href="https://github.com/mmvergara/">
          Template By: Mark Matthew Vergara
        </a>
        <a
          href="https://github.com/mmvergara/mmv-nextjs-discord-bot-template"
          target="_blank"
        >
          Github Repository
        </a>

        <form onSubmit={handleRegisterCommand}>
          <input
            type="text"
            placeholder="Register Commands Key"
            value={registerCommandsKey}
            onChange={(e) => setRegisterCommandsKey(e.target.value)}
          />
          <button disabled={registerCommandsKey.length < 1} type="submit">Register Commands</button>
        </form>
        <a
          className="hoverLinks"
          href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_APPLICATION_ID}&permissions=277025445888&scope=bot%20applications.commands`}
          target="_blank"
        >
          Invite Discord Bot
        </a>

        <p style={{ paddingTop: 30 }}>{status}</p>
        </main>
    )
}