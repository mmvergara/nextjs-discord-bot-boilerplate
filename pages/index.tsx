import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MMV | Nextjs Discord Bot Template</title>
      </Head>
      <main>
        <h1 style={{ color: "white", fontFamily: "sans-serif", marginTop: "4em", width: "100%", textAlign: "center" }}>
          Hello World
        </h1>
        <p style={{ color: "white", fontFamily: "sans-serif", marginTop: "1em", width: "100%", textAlign: "center" }}>
          <a
            href='https://github.com/mmvergara/mmv-nextjs-discord-bot-template'
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
              letterSpacing: "1px",
              marginBottom: "4em",
              backgroundColor: "white",
              padding: "0.5em",
            }}
          >
            Github Link
          </a>{" "}
          <br />
          <br />
          <a
            href='https://github.com/mmvergara/'
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
              letterSpacing: "1px",
              marginBottom: "1em",
              backgroundColor: "white",
              padding: "0.5em",
            }}
          >
            Made By: mmvergara
          </a>
        </p>
      </main>
    </>
  );
}
