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

					position: relative;
					z-index: 1;
					overflow: hidden;

					flex: 1 1 30ch;

					h3 {
						font-size: 1.6rem;
						margin-bottom: 0.25em;
						width: 100%;
					}

					&::after {
						content: "";
						position: absolute;
						inset: 0;
						background-color: #0004;
						z-index: -1;
						// transition: transform 0.2s ease;
						// transform-origin: left;
						transition: opacity 0.2s ease;
					}

					&:hover::after {
						// transform: scaleX(0);
						// transform-origin: right;
						opacity: 0;
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
