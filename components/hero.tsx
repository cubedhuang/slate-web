import styles from "../styles/Hero.module.scss";

export default function Hero() {
	return (
		<header className={styles.hero}>
			<h1 className={styles.title}>Slate</h1>

			<p className={styles.description}>
				Slate is a simple yet powerful bot that lets you watch YouTube Together,
				log ghost pings, play music, and dozens of other features!
			</p>
		</header>
	);
}
