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
  Text,
} from "@chakra-ui/react";
import LoginModal from "../Pages/LoginModal";
const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <DIV className="navbar">
      <div className="left">
        <div style={{width:"22%"}}>
          <img  src={logo} alt="images" />
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
      <div className="searchBox"></div>
      <div className="navButton">
        <Button
          onClick={() => {
            setLoginOpen(true);
          }}
        >
          Login
        </Button>
        <Button>Signup</Button>
      </div>
      <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
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
  .searchBox {
    width: 45%;
  }
  .drawer {
  }
  .option {
    padding: 10px;
  }
  .option:hover {
    background-color: #aaa7a7;
  }
`;

export default Navbar;
