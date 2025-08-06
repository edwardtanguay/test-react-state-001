import { useState } from "react";

export const PageWelcome = () => {
	const [isOnline, setIsOnline] = useState(false);
	const [thePassword, setThePassword] = useState("");

	const handleLoginButton = () => {
		if (thePassword === "fantastic") {
			setIsOnline(true);
		}
	}

	return (
		<>
			<div className="example">
				<h2>Example 1</h2>
				<div className="flex gap-1 items-center">
					<button onClick={() => setIsOnline(!isOnline)}>
						Change online status
					</button>

					<p className={`text-xl ${isOnline ? 'userIsOnline' : 'userIsOffline'}`}>
						User is {isOnline ? "online" : "offline"}.
					</p>
				</div>
			</div>

			<div className="example">
				<h2>Example 2</h2>
				{isOnline ? (
					<p className="text-xl">Enjoy the site.</p>
				) : (
					<div className="flex gap-1 items-center">
						<p className="text-xl">Password:</p>
						<input
							type="password"
							value={thePassword}
							onChange={(e) => setThePassword(e.target.value)}
							className="border border-slate-300 rounded-md px-2 py-1"
						/>
						<button className={`${thePassword.length < 8 ? 'disabled' : ''}`} disabled={thePassword.length < 8} onClick={handleLoginButton}>Login</button>

					</div>
				)}
			</div>
		</>
	);
};
