import "../styles/globals.scss";

import Footer from "../components/Footer";
import type { AppProps } from "next/app";

function SlateWeb({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Footer></Footer>
		</>
	);
}

export default SlateWeb;
