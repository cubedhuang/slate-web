import Head from "next/head";

export default function Privacy() {
	return (
		<>
			<Head>
				<title>Slate &ndash; Privacy Policy</title>
				<meta name="description" content="Slate's privacy policy." />

				<meta property="og:title" content="Slate – Privacy Policy" />
				<meta
					property="og:description"
					content="Slate's privacy policy."
				/>
			</Head>

			<style jsx>
				{`
					main {
						width: var(--container);
						margin: 0 auto;

						line-height: 1.5;

						h1 {
							padding-top: 2em;
						}

						h2,
						h3 {
							padding-top: 0.5em;
						}

						h3 {
							font-size: 1.2rem;
						}

						p {
							margin-bottom: 0.5em;
						}

						ol {
							margin: 0 0 0 1.5em;
						}
					}
				`}
			</style>

			<main>
				<h1>Privacy Policy</h1>

				<p>
					All of the following applies to information collected with
					the Discord application &quot;Slate#4283&quot;
					(785196430796914758) through the Discord bot gateway.
				</p>

				<h2>What information do we store and why?</h2>

				<p>
					We store our users&apos; IDs for all of the following
					information. All of this information can be accessed by
					people sharing a mutual server with Slate.
				</p>

				<ol>
					<li>
						We store user IDs and the number of times the commands
						have been run for the &quot;fun&quot; commands like{" "}
						<code>count</code> and <code>multiply</code>.
					</li>
					<li>
						We store past usernames and nicknames associated with
						specific user IDs. This is used for the{" "}
						<code>/info user</code> command and moderation purposes.
					</li>
					<li>
						We store user IDs in order to keep user XP for the
						messaging leaderboard and the <code>/leaderboard</code>
						command.
					</li>
					<li>
						We store server IDs in order to moderate and maintain
						server-specific settings. This includes custom command
						prefixes, disabled channels, logging channels, and
						logging toggles.
					</li>
				</ol>

				<h3>What about logging?</h3>

				<p>
					We observe, scan, but <u>don't store</u> any information
					that Slate logs regarding messages, presence changes, or
					nickname changes.
				</p>

				<h2>Third Party Data Sharing</h2>

				<p>
					We share data about the number of commands that are run with
					Statcord. All shared information is anonymous.
				</p>

				<p>
					See{" "}
					<a
						href="https://discordlabs.org/privacy"
						target="_blank"
						rel="noreferrer"
					>
						Statcord&apos;s Privacy Policy
					</a>
					.
				</p>

				<h2>Deleting Data</h2>

				<p>
					If you wish to delete data from Slate, use the{" "}
					<code>/delete</code> command. This will allow you to select
					the category of data that you wish to delete.
				</p>

				<h2>Questions and Concerns</h2>

				<p>
					If you have questions and/or concerns about the data stored,{" "}
					<a
						href="https://discord.gg/H4bndawejj"
						target="_blank"
						rel="noreferrer"
					>
						join our support server
					</a>
					.
				</p>

				<p>This policy was last updated November 17th, 2021.</p>
			</main>
		</>
	);
}
