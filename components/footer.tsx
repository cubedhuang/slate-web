import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<style jsx>{`
				footer {
					background: #080808;

					position: absolute;
					bottom: 0;
					width: 100%;
					min-height: 5rem;

					display: flex;
					justify-content: center;
					align-items: center;

					> div {
						width: var(--container);
						margin: 0 auto;

						display: flex;
						justify-content: space-between;
						align-items: center;
						gap: 2em;

						> * {
							display: flex;
							align-items: center;
						}

						> :first-child a {
							color: inherit;
							text-decoration: none;
						}

						> :last-child {
							flex-direction: column;
							text-align: right;
							justify-content: stretch;
						}

						.logo {
							height: 3em;
							margin-left: 0.5rem;

							img {
								display: block;
								height: 3em;
							}
						}
					}
				}
			`}</style>

			<footer>
				<div>
					<div>
						Made with &hearts; by Slate Development Team
						<span className="logo">
							<Image
								src="/transparent.svg"
								alt="Slate Logo"
								width={48}
								height={48}
							/>
						</span>
					</div>
					<div>
						<Link href="/">Home</Link>
						<Link href="/privacy">Privacy Policy</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
