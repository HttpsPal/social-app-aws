import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
	return (
		<div className="h-screen bg-purple-100 pt-1">
			<Head>
				<title>Social | Home</title>
				<meta
					name="description"
					content="Full Stack website made with Next.js and AWS Amplify"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="">
				<Navigation />
			</main>
		</div>
	);
};

export default Home;
