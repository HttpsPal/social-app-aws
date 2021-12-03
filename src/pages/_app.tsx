import type { AppProps } from "next/app";
import Amplify, { AuthModeStrategyType } from "aws-amplify";
import awsconfig from "../aws-exports";
import { AuthProvider } from "../context/useAuth";

import "../styles/index.css";

Amplify.configure({
	...awsconfig,
	ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
