import Head from "next/head";
import styles from "../styles/Privacy.module.scss";

export default function Privacy() {
	return (
		<main className={styles.main}>
			<Head>
				<title>Slate &ndash; Privacy Policy</title>
			</Head>

			<h1>Privacy Policy</h1>

			<p>
				All of the following applies to information collected with the Discord
				application &quot;Slate#4283&quot; (785196430796914758) through the
				Discord bot gateway.
			</p>

			<h2>What information do we store and why?</h2>

			<p>
				We store our users&apos; IDs for all of the following information. All
				of this information can be accessed by people sharing a mutual server
				with Slate.
			</p>

			<ol>
				<li>
					We store user IDs and the number of times the commands have been run
					for the &quot;fun&quot; commands like <code>;count</code> and{" "}
					<code>;multiply</code>.
				</li>
				<li>
					We store past usernames and nicknames associated with specific user
					IDs. This is used for the <code>;userinfo</code> command and
					moderation purposes.
				</li>
				<li>
					We store user IDs in order to keep user experience for the{" "}
					<code>;rank</code> and <code>;leaderboard</code> commands.
				</li>
				<li>
					We store server IDs in order to moderate and maintain server-specific
					settings. This includes, but is not necessarily limited to custom
					prefixes, disabled channels, logging channels, and logging toggles.
				</li>
			</ol>

			<h2>Third Party Data Sharing</h2>

			<p>
				We share data about the number of commands that are run with Statcord.
				All of the shared information is anonymous.
			</p>

			<p>
				See{" "}
				<a
					href="https://discordlabs.org/privacy"
					target="_blank"
					rel="noreferrer"
				>
					Statcord&apos;s Privacy Policy.
				</a>
			</p>

			<h2>Deleting Data</h2>

			<p>
				If you wish to delete data from Slate, use the <code>;delete</code>{" "}
				command. This will allow you to select the category of data that you
				wish to delete.
			</p>

			<h2>Questions and Concerns</h2>

			<p>
				If you have questions and/or concerns about the data stored, [join our
				support server](https://discord.gg/H4bndawejj).
			</p>

			<p>This policy was last updated July 20th, 2021.</p>
		</main>
	);
}
