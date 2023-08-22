import { useState } from "react";
import { IUser } from "@/types/auth";

const useContextData = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [isCheckingLoggedIn, setIsCheckingLoggedIn] =
		useState<boolean>(false);

	const handleUser = (user: IUser | null) => {
		setUser(user);
		setIsCheckingLoggedIn(false);
	};

	const handleIsLoggedIn = (isLoggedIn: boolean) => {
		setIsLoggedIn(isLoggedIn);
		setIsCheckingLoggedIn(false);
	};

	const handleIsCheckingLoggedIn = (isCheckingLoggedIn: boolean) => {
		setIsCheckingLoggedIn(isCheckingLoggedIn);
	};

	return {
		user,
		setUser: handleUser,
		isLoggedIn,
		setIsLoggedIn: handleIsLoggedIn,
		isCheckingLoggedIn,
		setIsCheckingLoggedIn: handleIsCheckingLoggedIn,
	};
};

export default useContextData;
