import Feature from "./Feature";

export default function FeatureList() {
	return (
		<>
			<style jsx>{`
				section {
					width: var(--container);
					margin: 0 auto;

					padding: 2em 0;

					display: flex;
					flex-wrap: wrap;
					align-items: stretch;
					gap: 1em;
				}
			`}</style>

			<section>
				<Feature name="YouTube Together" color="#e84118">
					YouTube Together is part of a new set of Discord features called
					Activities that let you interact with others in voice channels. Start
					a YouTube Together session with <code>;activity</code>!
				</Feature>
				<Feature name="Ghost Ping Logger" color="#487eb0">
					Slate has a versatile logging system that lets you track down ghost
					pings alongside potentially obscene statuses, nickname changes, and
					members leaving!
				</Feature>
				<Feature name="Music Player" color="#8c7ae6">
					Slate has an advanced music player for voice channels, including song
					looping, volume controls, loading Spotify playlists, and more!
				</Feature>
				<Feature name="Leveling System" color="#192a56">
					As people talk, they&apos;ll gain experience. Use the <code>;lb</code>{" "}
					and <code>;rank</code> commands to measure how active people are
					compared to each other in your servers!
				</Feature>
				<Feature name="Complex Math" color="#438a20">
					Use the our powerful <code>;math</code> command to evaluate complex
					math expressions, equations, and systems. Factoring quadratics? Just{" "}
					<code>;math factor x^2-4</code>! Integrating functions? Use{" "}
					<code>;math integrate 2x</code>!
				</Feature>
				<Feature name="Advanced Info" color="#273c75">
					Slate has several comprehensive info commands like{" "}
					<code>;userinfo</code> that give you as much information as possible,
					including username and nickname history!
				</Feature>
				<Feature name="...And More!" color="#2f3640">
					For a full list of features, invite Slate to your server and use the{" "}
					<code>;help</code> command!
				</Feature>
			</section>
		</>
	);
}
