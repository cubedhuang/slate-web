import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Slate Discord Bot</title>
				<meta
					name="description"
					content="Slate is a simple but powerful bot that lets you watch YouTube Together, log ghost pings, play music, and dozens of more features!"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<Hero />
		</>
	);
}
