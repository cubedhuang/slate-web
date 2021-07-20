import styles from "../styles/Feature.module.scss";

interface FeatureProps {
	name: string;
	children: string;
}

export default function Feature({ name, children }: FeatureProps) {
	return (
		<div className={styles.feature}>
			<h3 className={styles.name}>{name}</h3>
			{children}
		</div>
	);
}
