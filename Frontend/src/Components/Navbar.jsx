import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/studybuddy_logo.png";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text, Input, InputGroup, InputLeftElement, Icon,
} from "@chakra-ui/react";
import LoginModal from "../Pages/LoginModal";
import SignupModal from "../Pages/SignupModal";
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  return (
    <DIV className="navbar">
      <div className="left">
        <div style={{ width: "22%" }}>
          <img src={logo} alt="images" />
        </div>

        <div className="navigate">
          <Link to={"/"}>Home</Link>
          <Popover>
            <PopoverTrigger>
              <Text>Subjects</Text>
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
          <Link to={"/explanations"}>Expert solutions</Link>
        </div>
      </div>

      <div className="searchBox"><InputGroup>
        <InputLeftElement pointerEvents="auto">
          <Icon as={FaSearch} color="gray.600" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search textbooks, questions"
          borderRadius="full"
          backgroundColor={"gray.100"}
          _placeholder={{ color: 'gray.600', fontWeight: "semibold" }}
        />
      </InputGroup></div>

      <div className="navButton">
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
      <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <SignupModal signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px ;
  /* border: 1px solid grey; */
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: white;
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
  }
  .navigate {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .drawer {
  }
  .option {
    padding: 10px;
  }
  .option:hover {
    background-color: #aaa7a7;
  }

  .search-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  #search-input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  #search-button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #search-button:hover {
    background-color: #0056b3;
  }
`;

export default Navbar;
