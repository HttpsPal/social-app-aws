import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../context/useAuth";

interface IFormInput {
	username: string;
	email: string;
	password: string;
	code: string;
}

const SignIn: NextPage = () => {
	const { user, setUser } = useAuth();
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Sign In</title>
			</Head>
			<main>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<input
						type="text"
						placeholder="Username"
						{...(register("username"), { required: true })}
					/>
					<input
						type="email"
						placeholder="Email"
						{...(register("email"),
						{
							required: true,
						})}
					/>
					<input
						type="password"
						placeholder="Password"
						{...(register("password"), { required: true, minLength: 8 })}
					/>
					<button type="submit">Sign Up</button>
				</form>
			</main>
		</div>
	);
};

export default SignIn;
