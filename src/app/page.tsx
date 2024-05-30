"use client";
import { CLIENT_APPLICATION_ID } from "@/config";
import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const [registerCommandsKey, setRegisterCommandsKey] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleRegisterCommand = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestLink = '/api/discord-bot/register-commands?REGISTER_COMMANDS_KEY=' + registerCommandsKey;

    try {
      setStatus("Loading...");
      if (registerCommandsKey.length > 0) {
        await axios.get(
          requestLink
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
      <Link
        href="https://github.com/mmvergara/mmv-nextjs-discord-bot-template"
        target="_blank"
      >
        Github Repository
      </Link>

      <form onSubmit={handleRegisterCommand}>
        <input
          type="text"
          placeholder="Register Commands Key"
          value={registerCommandsKey}
          onChange={(e) => setRegisterCommandsKey(e.target.value)}
        />
        <button disabled={registerCommandsKey.length < 1} type="submit">Register Commands</button>
      </form>
      <Link
        className="hoverLinks"
        href={`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_APPLICATION_ID}&permissions=2147483648&scope=bot`}
        target="_blank"
      >
        Invite Discord Bot
      </Link>

      <p style={{ paddingTop: 30 }}>{status}</p>
    </main>
  )
}