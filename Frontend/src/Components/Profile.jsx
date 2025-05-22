import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { LOGOUT_SUCCESS } from "../Redux/Login_Signup/actionType";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const btnRef = React.useRef();
  function handleLogout() {
    dispatch({ type: LOGOUT_SUCCESS });
    onClose();
    navigate("/");
  }
  return (
    <>
      <Button ref={btnRef} colorScheme="orange" onClick={onOpen}>
        Profile
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Profile</DrawerHeader>

          <DrawerBody>
            <div>
              <Text>Email:-user@gmail.com</Text>
              <Text>Username:-user</Text>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={handleLogout}
            >
              Logout
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Cancle
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
