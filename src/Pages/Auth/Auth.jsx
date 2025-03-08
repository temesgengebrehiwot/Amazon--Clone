import React, {useState, useContext} from "react";
import styles from "./Auth.module.css";
import {Link, useNavigate, useLocation} from "react-router";
import {Type} from "../../Utility/action.type";
import {ClipLoader} from "react-spinners";
import {auth} from "../../Utility/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import {DataContext} from "../../Components/DataProvider/DataProvider";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState({
		signIn: false,
		signUp: false,
	});

	const [{user}, dispatch] = useContext(DataContext);
	const navigate = useNavigate();
	const navStateData = useLocation();
	console.log(navStateData);

	// console.log(user);

	const authHandler = async (e) => {
		e.preventDefault();
		// console.log(e.target.name);
		if (e.target.name === "sign in") {
			setLoading({...loading, signIn: true});
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({...loading, signIn: false});
					navigate(navStateData?.state?.redirect || "/");

					console.log(userInfo);
				})
				.catch((err) => {
					setError(err.message);
					setLoading({...loading, signIn: false});
				});
		} else {
			setLoading({...loading, signUp: true});
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({...loading, signUp: false});
					navigate(navStateData?.state?.redirect || "/");

					console.log(userInfo);
				})
				.catch((err) => {
					setError(err.message);
					setLoading({...loading, signUp: false});
				});
		}
	};
	return (
		<section className={styles.login}>
			<Link to="/">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon logo"
				/>
			</Link>
			<div className={styles.login_container}>
				<h1>Sign In</h1>
				{navStateData?.state?.msg && (
					<small
						style={{
							padding: "5px",
							textAlign: "center",
							color: "red",
							fontWeight: "bold",
						}}
					>
						{navStateData.state.msg}
					</small>
				)}
				<form action="" method="post">
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name=""
							id=""
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name=""
							id=""
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						className={styles.login_signinButton}
						type="submit"
						name="sign in"
						onClick={authHandler}
					>
						{loading.signIn ? <ClipLoader size={25} /> : "Sign in"}
					</button>
				</form>
				{/* agreement */}
				<p>
					By signing in you agree to the Amazon clone website conditions of use
					&ale. Please see our privacy Notice, our Cookies and our
					inrerest-Based Ads Notice
				</p>
				{/* create account button */}
				<button
					className={styles.registerButton}
					type="submit"
					name="sign up"
					onClick={authHandler}
				>
					{loading.signUp ? (
						<ClipLoader size={25} />
					) : (
						"Create Your Amazon Account"
					)}
				</button>
				{error && (
					<small
						style={{
							paddingTop: "10px",
							color: "red",
						}}
					>
						{error}
					</small>
				)}
			</div>
		</section>
	);
};

export default Auth;
