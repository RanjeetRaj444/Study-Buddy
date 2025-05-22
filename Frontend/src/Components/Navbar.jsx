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
import LoginModal from "../Pages/LoginModal";
import SignupModal from "../Pages/SignupModal";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const subjects = [
  "Exams",
  "Arts and Humanities",
  "Languages",
  "Math",
  {
    label: "Science",
    sub: ["Physics", "Chemistry", "Biology", "Computer Science", "Other"],
  },
  "Social Science",
  "Other",
];

function SubjectsPopover({ isDrawer }) {
  return (
    <Popover placement="bottom-start" trigger="hover">
      <PopoverTrigger>
        <Text className="links" tabIndex={0} style={{ cursor: "pointer" }}>
          Subjects
        </Text>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <div className={isDrawer ? "drawer" : "drawer"}>
            {subjects.map((item, idx) =>
              typeof item === "string" ? (
                <Text className="option" key={item}>
                  {item}
                </Text>
              ) : (
                <Popover
                  trigger="hover"
                  placement="right-start"
                  key={item.label}
                >
                  <PopoverTrigger>
                    <Text
                      className="option"
                      tabIndex={0}
                      style={{ cursor: "pointer" }}
                    >
                      {item.label}
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <div className="drawer">
                        {item.sub.map((sub) => (
                          <Text className="option" key={sub}>
                            {sub}
                          </Text>
                        ))}
                      </div>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              )
            )}
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

function NavigationLinks({ isDrawer }) {
  return (
    <div className={isDrawer ? "navigate" : "navigate"}>
      <Link className="links" to="/">
        Home
      </Link>
      <SubjectsPopover isDrawer={isDrawer} />
      <Link className="links" to="/explanations">
        Expert solutions
      </Link>
    </div>
  );
}

function AuthButtons({ setLoginOpen, setSignupOpen, isDrawer }) {
  return (
    <div className="navButton">
      <Button
        colorScheme="blue"
        onClick={() => {
          setLoginOpen(true);
          setSignupOpen && setSignupOpen(false);
        }}
      >
        Login
      </Button>
      <Button
        colorScheme="yellow"
        className="signup_btn"
        onClick={() => {
          setSignupOpen(true);
          setLoginOpen && setLoginOpen(false);
        }}
      >
        Signup
      </Button>
    </div>
  );
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((store) => store.auth.token);

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
            <div className="Logo" style={{ width: "22%" }}>
              <img src={logo} alt="images" />
            </div>
            <NavigationLinks isDrawer />
            {token === undefined ? (
              <AuthButtons
                setLoginOpen={setLoginOpen}
                setSignupOpen={setSignupOpen}
                isDrawer
              />
            ) : (
              <Profile />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Navbar */}
      <div className="left">
        <div className="Logo" style={{ width: "22%" }}>
          <img src={logo} alt="images" />
        </div>
        <Button className="hambergerButton" colorScheme="blue" onClick={onOpen}>
          <BsLayoutTextSidebar />
        </Button>
        <NavigationLinks />
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
        <AuthButtons
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
        />
      ) : (
        <Profile />
      )}
      <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <SignupModal signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
    }
    .navigate {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 1024px) {
    .signup_btn {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    .hambergerButton {
      display: block;
    }
    .Logo,
    .navigate {
      display: none;
    }
  }
`;

export default Navbar;
