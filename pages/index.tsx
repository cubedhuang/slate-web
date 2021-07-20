import Head from "next/head";
import Hero from "../components/hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Slate &ndash; Discord Bot</title>

				<meta
					name="description"
					content="Slate is a simple yet powerful bot that lets you watch YouTube Together, log ghost pings, play music, and dozens of more features!"
				/>
				<meta name="theme-color" content="#273c75" />
				<meta property="og:image" content="/slate.png" />

				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<Hero />
		</>
	);
}
