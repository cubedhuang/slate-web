import Image from "next/image";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				Made with &hearts; by Slate Development Team
				<span className={styles.logo}>
					<Image
						src="/transparent.svg"
						alt="Slate Logo"
						width={16}
						height={16}
					/>
				</span>
			</div>
		</footer>
	);
}
