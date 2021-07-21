interface FeatureProps {
	name: string;
	color: string;
	children?: any;
}

export default function Feature({ name, color, children }: FeatureProps) {
	return (
		<>
			<style jsx>{`
				.feature {
					background: ${color};
					padding: 1.5em;
					border-radius: 1em;
					transition: all 0.2s;

					flex: 1 1 30ch;

					h3 {
						font-size: 1.6rem;
						margin-bottom: 0.25em;
						width: 100%;
					}

					&:hover {
						background: ${color};
					}
				}
			`}</style>

			<div className="feature">
				<h3>{name}</h3>
				<p>{children}</p>
			</div>
		</>
	);
}
