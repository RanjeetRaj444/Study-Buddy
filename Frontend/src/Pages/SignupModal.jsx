import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from 'react';
import LoginSignupBanner from "../Components/Login&Signup/LoginSignupBanner";

import LoginForm from "../Components/Login&Signup/LoginForm";
import { styled } from "styled-components";
import SignupForm from "../Components/Login&Signup/SignupForm";

const SignupModal = ({ signupOpen, setSignupOpen }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();


  return <DIV>
    <Modal isCentered isOpen={signupOpen} onClose={onClose}>
      <ModalOverlay
        bg='white'
        backdropFilter='blur(10px) '
        display={"flex"}
        alignItems={"center"}
      >
        <ModalCloseButton onClick={() => setSignupOpen(false)} />
        <LoginSignupBanner />
        <SignupForm/>
      </ModalOverlay>
    </Modal >
  </DIV >
}

const DIV=styled.div`
  position: fixed;
  top: -50%;
  border: 1px solid red;
  visibility: hidden;
`

export default SignupModal;