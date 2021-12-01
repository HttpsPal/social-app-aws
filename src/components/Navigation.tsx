import Link from "next/link";
import { useAuth } from "../context/useAuth";

interface Props {}

const Navigation = (props: Props) => {
	return (
		<nav className="flex justify-evenly items-center">
			<ul>
				<li>
					<Link href="/">
						<a href="">Home</a>
					</Link>
				</li>
			</ul>
			<div>
				<Link href="/signup">
					<a className="mr-10">Sign Up</a>
				</Link>
				<Link href="/login">
					<a className="">login</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
