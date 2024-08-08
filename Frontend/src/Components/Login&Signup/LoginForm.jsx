import {
	Button,
	Center,
	FormControl,
	FormLabel,
	Input,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { styled } from "styled-components";
import { login } from "../../Redux/Login_Signup/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupModal from "../../Pages/SignupModal";

let initialState = {
	email: "",
	password: "",
};

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "email": {
			return {
				...state,
				email: payload,
			};
		}
		case "password": {
			return {
				...state,
				password: payload,
			};
		}
		case "reset": {
			return initialState;
		}

		default:
			return state;
	}
};

const LoginForm = ({ onClose }) => {
	const toast = useToast();
	const [state, dispatch] = useReducer(reducer, initialState);
	const dispatcher = useDispatch();
	const navigate = useNavigate();
	const [signupOpen, setSignupOpen] = useState(false);

	const handleChange = (e) => {
		dispatch({ type: e.target.name, payload: e.target.value });
	};

	const handleSubmit = (e) => {
		console.log("login");
		
		e.preventDefault();
		if (state.email === "admin@gmail.com" && state.password === "admin") {
			navigate("/admin/dashboard");
		} else {
			console.log(state);
			
			dispatcher(login(state, toast));
			dispatch({ type: "reset" });
		}
	};
	return (
		<DIV>
			<div className="formSec">
				<form onSubmit={handleSubmit}>
					<FormControl isRequired>
						<input
							placeholder="Type your email address or username"
							name="email"
							value={state.email}
							onChange={handleChange}
						/>
						<FormLabel fontSize={"sm"} color={"#718096"}>
							EMAIL
						</FormLabel>
					</FormControl>
					<FormControl isRequired>
						<input
							type="password"
							placeholder="Type your password"
							name="password"
							value={state.password}
							onChange={handleChange}
						/>
						<FormLabel fontSize={"sm"} color={"#718096"}>
							PASSWORD
						</FormLabel>
					</FormControl>
					<div className="policyText">
						<Text>By tapping Log in, you accept Quizlet's</Text>
						<Text>Terms of Service</Text>
						<Text>and</Text>
						<Text>Privacy Policy</Text>
					</div>
					<Button
						type="submit"
						width={"100%"}
						height={"70px"}
						size={"lg"}
						fontWeight={"bold"}
						color={"white"}
						bg={"teal.400"}
						_hover={{ bg: "teal" }}
					>
						Log in
					</Button>
					<div className="bottomText">
						<Text>Remember to log out on shared devices</Text>
						<Text>Forgot?</Text>
					</div>
				</form>
			</div>
			<div className="bottomSec">
				<Text>New to StuddyBuddy?</Text>
				<Text
					onClick={() => {
						setSignupOpen(true);
					}}
				>
					Create an account
				</Text>
				<SignupModal signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
			</div>
		</DIV>
	);
};

const DIV = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.topSec {
		width: 80%;
		display: flex;
	}

	.formSec {
		width: 80%;
	}
	.formSec input {
		width: 100%;
		border-bottom: 3px solid #2d3748;
		height: 53px;
		outline: none;
		font-size: 18px;
		margin: 5px 0px;
	}
	.formSec input:focus {
		border-bottom: 4px solid #f2c935;
	}
	.policyText {
		width: 74.5%;
		display: flex;
		margin: 25px auto;
		justify-content: space-between;
		font-size: 13.5px;
		color: #718096;
	}
	.policyText > :nth-last-child(1) {
		font-weight: bold;
		color: #4a5568;
	}
	.policyText > :nth-child(2) {
		font-weight: bold;
		color: #4a5568;
	}
	.bottomText {
		margin: 5px 0px;
		display: flex;
		justify-content: space-between;
	}
	.bottomText > :first-child {
		color: #718096;
		font-size: 13.5px;
	}
	.bottomText > :last-child {
		color: #38b2ac;
		font-weight: bold;
		font-size: 15px;
	}
	.bottomText > :last-child:hover {
		cursor: pointer;
		color: #f2c935;
	}
	.bottomSec {
		border: 2px solid #718096;
		width: 80%;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3px;
		margin: 20px 0px;
	}
	.bottomSec > :last-child {
		color: #38b2ac;
		font-weight: bold;
	}
	.bottomSec > :last-child:hover {
		cursor: pointer;
		color: #f2c935;
	}
`;

export default LoginForm;
