import axios from "axios";
import { CLIENT_APPLICATION_ID } from "config";
import Head from "next/head";
import { FormEvent, useState } from "react";

export default function Home() {
  const [registerCommandsKey, setRegisterCommandsKey] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleRegisterCommand = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setStatus("Loading...");
      await axios.get(`/api/discord-bot/register-commands?REGISTER_COMMANDS_KEY=${registerCommandsKey}`);
      setStatus("Commands Registered!!!");
    } catch (error) {
      setStatus("Something wen't wrong ");
    }
  };

  return (
    <>
      <Head>
        <title>MMV | Nextjs Discord Bot Template</title>
      </Head>
      <main>
        <h1>MMV | Nextjs Discord Bot Template</h1>
        <a
          className='hoverLinks'
          href={`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_APPLICATION_ID}&permissions=277025445888&scope=bot%20applications.commands`}
          target='_blank'
        >
          Invite Discord Bot
        </a>
        <form onSubmit={handleRegisterCommand}>
          <input
            type='text'
            placeholder='Register Commands Key'
            value={registerCommandsKey}
            onChange={(e) => setRegisterCommandsKey(e.target.value)}
          />
          <button type='submit' className='hoverLinks'>
            Register Commands
          </button>
        </form>
        <p>{status}</p>
        <div>
          <a className='hoverLinks' href='https://github.com/mmvergara/mmv-nextjs-discord-bot-template' target='_blank'>
            Github Repository
          </a>
          <a className='hoverLinks' href='https://github.com/mmvergara/' target='_blank'>
            Bot By: mmvergara
          </a>
        </div>
      </main>
    </>
  );
}
