import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
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
    <DIV>
      <div className="left">
        <div>
          <img src="" alt="images" />
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
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Link to={"/explanations"}>Expert solutions</Link>
        </div>
      </div>
      <div className="searchBox">

      </div>
      <div className="navButton">
        <Button onClick={() => { setLoginOpen(true) }}>
          Login
        </Button>
        <Button>
          Signup
        </Button>
      </div>
      <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen}/>
    </DIV>

  );
};

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid grey;
  align-items: center;

  .left {
    width: 35%;
    display: flex;
    justify-content: space-between;
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
  
`;

export default Navbar;
