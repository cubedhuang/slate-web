import styles from "../styles/FeatureList.module.scss";
import Feature from "./feature";

export default function FeatureList() {
	return (
		<section className={styles.list}>
			<Feature name="YouTube Together">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
				iure minima error nihil assumenda cum nulla et neque dolores atque ipsa,
				explicabo, veniam, dolorum consequuntur! Laborum maxime voluptas quis
				aut!
			</Feature>
			<Feature name="Ghost Ping Logger">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
				iure minima error nihil assumenda cum nulla et neque dolores atque ipsa,
				explicabo, veniam, dolorum consequuntur! Laborum maxime voluptas quis
				aut!
			</Feature>
			<Feature name="Music Player">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
				iure minima error nihil assumenda cum nulla et neque dolores atque ipsa,
				explicabo, veniam, dolorum consequuntur! Laborum maxime voluptas quis
				aut!
			</Feature>
			<Feature name="oteh oiaf">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
				iure minima error nihil assumenda cum nulla et neque dolores atque ipsa,
				explicabo, veniam, dolorum consequuntur! Laborum maxime voluptas quis
				aut!
			</Feature>
		</section>
	);
}
