import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useAuth } from "../context/useAuth";

const inputClass = `block rounded-lg outline-none bg-gray-100 py-3 pl-3 w-full`;
const spanClass = ` block ml-1 mb-1 text-red-600`;
const formGroupClass = `px-5 mb-4`;
interface IFormInput {
	username: string;
	email: string;
	password: string;
	code: string;
}

const SignIn: NextPage = () => {
	const [codeInput, setCodeInput] = useState<boolean>(false);
	const [inputType, setInputType] = useState<string>("password");
	const { user, setUser } = useAuth();
	const router = useRouter();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			if (codeInput) {
				confirmSignUp(data);
			} else {
				await signUpWithEmailAndPassword(data);
				setCodeInput(true);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const signUpWithEmailAndPassword = async (
		data: IFormInput
	): Promise<CognitoUser> => {
		const { username, password, email } = data;
		try {
			const { user } = await Auth.signUp({
				username,
				password,
				attributes: {
					email,
				},
			});
			console.log("Signed up a user:", user);
			return user;
		} catch (error) {
			throw error;
		}
	};

	const confirmSignUp = async (data: IFormInput) => {
		const { username, password, code } = data;
		try {
			await Auth.confirmSignUp(username, code);
			const amplifyUser = await Auth.signIn(username, password);
			console.log("Successs, singed in a user", amplifyUser);
			if (amplifyUser) {
				router.push(`/`);
			} else {
				throw new Error("Something went wrong :'(");
			}
		} catch (error) {
			console.log("error confirming sign up", error);
		}
	};

	console.log("The value of the user from the hook is:", user);

	return (
		<div className="h-screen w-full bg-gray-100">
			<Head>
				<title>Sign In</title>
			</Head>
			<main className="flex flex-col h-screen justify-center items-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					autoComplete="off"
					className="flex flex-col justify-center items-center bg-white rounded-lg w-full h-screen"
				>
					<div className="w-full text-center py-5">
						<h1 className="text-4xl font-semibold">Create Account</h1>
						<p className=" inline-block ml-1">Already have an account?</p>
						<Link href="/login">
							<a className="ml-2 underline text-blue-600">Sign in</a>
						</Link>
					</div>
					<div className="w-full">
						<div className={formGroupClass}>
							<input
								className={inputClass}
								type="text"
								placeholder="Username"
								{...register("username", {
									required: true,
									minLength: 4,
									maxLength: 16,
								})}
							/>
							<span className={errors.username ? spanClass : "hidden"}>
								{errors.username?.type === "required"
									? "Please enter a username"
									: errors.username?.type === "minLength"
									? "Username must be at least 4 characters"
									: "Username can not exceed 16 characters"}
							</span>
						</div>
						<div className={formGroupClass}>
							<input
								className={inputClass}
								type="email"
								placeholder="Email"
								{...register("email", { required: true })}
							/>
							<span className={errors.email ? `block ${spanClass}` : "hidden"}>
								Please enter an email
							</span>
						</div>
						<div className={formGroupClass}>
							<input
								className={inputClass}
								type={inputType}
								placeholder="Password"
								{...register("password", { required: true, minLength: 8 })}
							/>
							<span
								className={errors.password ? `block ${spanClass}` : "hidden"}
							>
								{errors.password?.type === "required"
									? "Please enter a password"
									: "Password must be longer than 8 characters"}
							</span>
						</div>
						<div className={codeInput ? `${formGroupClass}` : "hidden"}>
							<input
								className={inputClass}
								type="text"
								placeholder="Enter Code"
								{...register("code", {
									required: true,
									minLength: 6,
									maxLength: 6,
								})}
							/>
							<span className={errors.code ? `block ${spanClass}` : "hidden"}>
								{errors.code?.type === "required"
									? "Please enter your confirmation code sent to your email"
									: errors.code?.type === "minLength"
									? "Code is not shorter than 6 digits"
									: "Code is does not exceed 6 digits"}
							</span>
						</div>
					</div>

					<button
						className="bg-yellow-600 text-white py-2 px-10 rounded-lg mt-3"
						type="submit"
					>
						{codeInput ? "Confirm Code" : "Sign Up"}
					</button>
				</form>
			</main>
		</div>
	);
};

export default SignIn;
