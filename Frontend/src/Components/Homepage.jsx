import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";

const Homepage = () => {
  return (
    <DIV className="homePage">
      <div className="recentMain">
        <Heading>Recent</Heading>
        <div className="excersizeContainer">
          <div className="detailsContainer">
            <div className="textContainer">
              <Text>Exercise 1</Text>
              <Text>Biology</Text>
              <Text>Chapter 1, Section 1.1, Page 7</Text>
            </div>
            <div className="imageContainer">
              <img
                src="https://d2nchlq0f2u6vy.cloudfront.net/cache/f1/bb/f1bb7656fe953c49c272562046468bf5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="detailsContainer">
            <div className="textContainer">
              <Text>Exercise 2</Text>
              <Text>Biology</Text>
              <Text>Chapter 1, Section 1.1, Page 7</Text>
            </div>
            <div className="imageContainer">
              <img
                src="https://d2nchlq0f2u6vy.cloudfront.net/cache/f1/bb/f1bb7656fe953c49c272562046468bf5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="detailsContainer">
            <div className="textContainer">
              <Text>Exercise 1</Text>
              <Text>Advanced Engineering Mathematics</Text>
              <Text>Chapter 1, Section 1.1, Page 8</Text>
            </div>
            <div className="imageContainer">
              <img
                src="https://d2nchlq0f2u6vy.cloudfront.net/cache/9b/70/9b7028ce0801ff0d018c1917ef1a1a50.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .recentMain {
    margin-left: 25px;
  }
  .excersizeContainer {
    width: 72%;
    display: flex;
    gap: 20px;
  }
  .detailsContainer {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid; */
    padding: 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .detailsContainer .imageContainer {
    width: 30%;
  }
  .detailsContainer img {
    /* width: 30%; */
    border-radius: 10px;
  }
  .detailsContainer .textContainer {
    /* width: 30%; */
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export default Homepage;
