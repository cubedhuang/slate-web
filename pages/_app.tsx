import Footer from "../components/footer";
import type { AppProps } from "next/app";

function SlateWeb({ Component, pageProps }: AppProps) {
	return (
		<>
			<style global jsx>{`
				:root {
					--primary-300: #273c75;
					--primary-500: #4063c1;
					--primary-700: #5481ff;

					--container: min(100% - 4rem, 1140px);
				}

				*,
				*::after,
				*::before {
					padding: 0;
					margin: 0;
					box-sizing: border-box;
				}

				body {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
						Oxygen, Ubuntu, Cantarell, "Open Sans", "Fira Sans", "Droid Sans",
						"Helvetica Neue", sans-serif;
					color: #fff;
					background: #121212;
					position: relative;
					padding-bottom: 6rem;
					min-height: 100vh;
				}

				a {
					text-decoration: none;
					color: var(--primary-700);
				}

				a:hover,
				a:focus,
				a:active {
					text-decoration: underline;
				}

				code {
					background: #fff2;
					padding: 0.25em;
					border-radius: 0.25em;
				}
			`}</style>

			<Component {...pageProps} />
			<Footer></Footer>
		</>
	);
}

export default SlateWeb;
