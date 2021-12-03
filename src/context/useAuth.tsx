import {
	Dispatch,
	SetStateAction,
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

interface AuthProps {
	children: ReactNode;
}

interface IAuth {
	user: CognitoUser | null;
	setUser: Dispatch<SetStateAction<CognitoUser | null>>;
}

const AuthContext = createContext<IAuth>({} as IAuth);

const AuthProvider = ({ children }: AuthProps) => {
	const [user, setUser] = useState<CognitoUser | null>(null);

	useEffect(() => {
		Hub.listen("auth", () => checkUser());
	}, []);

	const checkUser = async (): Promise<void> => {
		try {
			const amplifyUser = await Auth.currentAuthenticatedUser();
			if (amplifyUser) {
				setUser(amplifyUser);
			}
		} catch (error) {
			setUser(null);
			console.error(error);
		}
	};

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
