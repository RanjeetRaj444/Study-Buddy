import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/studybuddy_logo.png";
import { BsLayoutTextSidebar } from "react-icons/bs";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	Button,
	Text,
	Input,
	InputGroup,
	InputLeftElement,
	Icon,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import LoginModal from "../Pages/LoginModal";
import SignupModal from "../Pages/SignupModal";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Profile from "./Profile";
const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// console.log("auth",isAuth)
	let token = useSelector((store) => store.authReducer.token);

	const [loginOpen, setLoginOpen] = useState(false);
	const [signupOpen, setSignupOpen] = useState(false);
	return (
		<DIV className="navbar">
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>

					<DrawerBody display={"flex"} flexDirection={"column"} gap={"20px"}>
						<div style={{ width: "22%" }}>
							<img src={logo} alt="images" />
						</div>
						<div
							style={{ display: "flex", gap: "20px", flexDirection: "column" }}
							className="navigate"
						>
							<Link to={"/"}>Home</Link>
							<Popover>
								<PopoverTrigger>
									<Text>Subjects</Text>
								</PopoverTrigger>
								<PopoverContent>
									<PopoverArrow />
									<PopoverCloseButton />
									<PopoverBody>
										<div className="navigate">
											<Link className="links" to={"/"}>
												Home
											</Link>
											<Popover>
												<PopoverTrigger>
													<Text className="links">Subjects</Text>
												</PopoverTrigger>
												<PopoverContent>
													<PopoverArrow />
													<PopoverCloseButton />
													<PopoverBody>
														<div className="drawer">
															<Text className="option">Exams</Text>
															<Text className="option">
																Arts and Humanities
															</Text>
															<Text className="option">Languages</Text>
															<Text className="option">Math</Text>
															<Text className="option">Science</Text>
															<Text className="option">Social Science</Text>
															<Text className="option">Other</Text>
														</div>
													</PopoverBody>
												</PopoverContent>
											</Popover>
										</div>
									</PopoverBody>
								</PopoverContent>
							</Popover>
							<Link className="links" to={"/explanations"}>
								Expert solutions
							</Link>
						</div>
						{token === undefined ? (
							<div
								style={{ display: "flex", gap: "20px" }}
								className="navButton"
							>
								<Button
									onClick={() => {
										setLoginOpen(true);
									}}
								>
									Login
								</Button>
								<Button
									onClick={() => {
										setSignupOpen(true);
									}}
								>
									Signup
								</Button>
							</div>
						) : (
							// <Button onClick={() => dispatch({ type: LOGOUT_SUCCESS })}>
							// 	logout
							// </Button>
							<Profile />
						)}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<div className="left">
				<div className="Logo" style={{ width: "22%" }}>
					<img src={logo} alt="images" />
				</div>
				<Button className="hambergerButton" colorScheme="blue" onClick={onOpen}>
					<BsLayoutTextSidebar />
				</Button>
				<div className="navigate">
					<Link className="links" to={"/"}>
						Home
					</Link>
					<Popover>
						<PopoverTrigger>
							<Text className="links">Subjects</Text>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverBody>
								<div className="drawer">
									<Text className="option">Exams</Text>
									<Text className="option">Arts and Humanities</Text>
									<Text className="option">Languages</Text>
									<Text className="option">Math</Text>
									<Text className="option">Science</Text>
									<Text className="option">Social Science</Text>
									<Text className="option">Other</Text>
								</div>
							</PopoverBody>
						</PopoverContent>
					</Popover>
					<Link className="links" to={"/explanations"}>
						Expert solutions
					</Link>
				</div>
			</div>
			<div className="searchBox">
				<InputGroup>
					<InputLeftElement pointerEvents="auto">
						<Icon as={FaSearch} color="gray.600" />
					</InputLeftElement>
					<Input
						type="text"
						placeholder="Search textbooks, questions"
						borderRadius="full"
						backgroundColor={"gray.100"}
						_placeholder={{ color: "gray.600", fontWeight: "semibold" }}
					/>
				</InputGroup>
			</div>
			{token === undefined ? (
				<div className="navButton">
					<Button
						onClick={() => {
							setLoginOpen(true);
							setSignupOpen(false);
						}}
					>
						Login
					</Button>
					<Button
					className="signup_btn"
						onClick={() => {
							setSignupOpen(true);
							setLoginOpen(false);
						}}
					>
						Signup
					</Button>
				</div>
			) : (
				// <Button onClick={() => dispatch({ type: LOGOUT_SUCCESS })}>
				// 	logout
				// </Button>
				<Profile />
			)}
			<LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
			<SignupModal signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
		</DIV>
	);
};

const DIV = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 12px;
	align-items: center;
	position: sticky;
	top: 0px;
	z-index: 1;
	background-color: white;
	padding: 0.5rem;
	.left {
		width: 35%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.navButton {
		width: 12.5%;
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
	.navigate {
		padding: 0.5rem 0.5rem;
		width: 75%;
		display: flex;
		justify-content: space-between;
		font-weight: 900;
	}
	.option {
		padding: 10px;
		border-radius: 12px;
	}
	.links {
		padding: 10px;
		border-radius: 12px;
	}
	.links:hover {
		color: #fff;
		background-color: #000;
	}
	.option:hover {
		background-color: #aaa7a7;
	}
	.hambergerButton {
		display: none;
	}
	@media only screen and (max-width: 1100px) {
		.left {
			justify-content: space-between;
			gap: 20px;
			/* display: ; */
		}
		/* .hambergerButton {
			display: block;
		} */
		.navigate {
			/* display: none;/ */
			font-weight: bold;
			font-size: 0.8rem;
		}
		/* .navButton {
			width: 80%;
			display: none;
		} */
	}
	@media only screen and (max-width: 1024px) {
		.signup_btn {
			/* width: 100%; */
			display: none;
		}
	}
	@media only screen and (max-width: 768px) {
		/* .left {
			justify-content: flex-start;
			gap: 20px;
		} */
		justify-content: space-around;
		.hambergerButton {
			display: block;
		}
		.Logo,
		.navigate {
			display: none;
		}
		/* .navButton {
			width: 100%;
			display: none;
		} */
	}
	@media only screen and (max-width: 425px) {
		/* .left {
			justify-content: flex-start;
			gap: 20px;
		}
		.hambergerButton {
			display: block;
		}
		.Logo,
		.navigate {
			display: none;
		}
		.navButton {
			width: 100%;
			display: none;
		} */
	}
	@media only screen and (max-width: 375px) {
		/* .left {
			justify-content: flex-start;
			gap: 20px;
		}
		.hambergerButton {
			display: block;
		}
		.Logo,
		.navigate {
			display: none;
		}
		.navButton {
			width: 100%;
			display: none;
		} */
	}
`;

export default Navbar;
