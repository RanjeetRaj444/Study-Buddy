import React from "react";
import Footer from "./Footer";
import { Button, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { styled } from "styled-components";
import image1 from "../Assets/LandingIamge1.avif";

const LandingPage = () => {
  return (
    <DIV image1={image1}>
      <div className="bodyPart">
        <div className="Top_Section">
          <div>
            <Heading>The best digital flashcards and study tools</Heading>
            <Text>
              Join over 60 million students using studyBuddy's science-backed
              flashcards, practice tests and expert solutions to improve their
              grades and reach their goals.
            </Text>
            <Button>Sign up for free</Button>
          </div>
        </div>
        <Heading width="80%" margin="auto">
          90% of students who use studyBuddy report receiving higher grades
        </Heading>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="footerPart">
        <Footer />
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  .Top_Section {
    width: 100%;
    height: 800px;
    background-image: url(${(props) => props.image1});
    background-size: cover;
  }
  .Top_Section div {
    width: 40%;
    align-items: center;
    margin: auto;
    color: white;
  }
`;
export default LandingPage;
