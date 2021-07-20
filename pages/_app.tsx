import "../styles/globals.scss";

import Footer from "../components/footer";
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
