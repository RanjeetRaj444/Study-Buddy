import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";
import { MdVerified } from "react-icons/md";
import home_Pic from "../Assets/home_pic.png";

const Homepage = () => {
  return (
    <DIV className="homePage">
      <div className="recentMain">
        <Heading fontSize={"1.5rem"}>Recent</Heading>
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
      <div className="mid_container">
        <img src={home_Pic} alt="" />
      </div>
      <div className="recentMain">
        <Heading fontSize={"1.5rem"}>Recommended expert solutions</Heading>
        <div className="excersizeContainer">
          <div className="detailsContainer">
            <div className="imageContainer">
              <img
                src="https://d2nchlq0f2u6vy.cloudfront.net/cache/c8/a5/c8a5311396364c06fa04595bbe2902f9.jpg"
                alt=""
              />
            </div>
            <div className="textContainer">
              <Text>Precalculus</Text>
              <Text>
                2nd Edition ISBN: 9780076602186 Carter, Cuevas, Day, Malloy
              </Text>
              <Text className="solution">
                <MdVerified />
                1,783 solutions
              </Text>
            </div>
          </div>
          <div className="detailsContainer">
            <div className="imageContainer">
              <img
                src="https://d2nchlq0f2u6vy.cloudfront.net/cache/2c/1e/2c1ebd8444499a8944f1c1c221b4201d.jpg"
                alt=""
              />
            </div>
            <div className="textContainer">
              <Text>Realidades 2</Text>
              <Text>1st Edition ISBN: 9780130360021 Savvas Learning Co</Text>
              <Text className="solution">
                <MdVerified />
                1,783 solutions
              </Text>
            </div>
          </div>
          <div className="detailsContainer">
            <div className="imageContainer">
              <img
                src="https://d2nchlq0f2u6vy.cloudfront.net/cache/ed/fb/edfba486f9985ffe5b1b850ec44e2ea5.jpg"
                alt=""
              />
            </div>
            <div className="textContainer">
              <Text>Precalculus</Text>
              <Text>
                2nd Edition ISBN: 9780076602186 Carter, Cuevas, Day, Malloy
              </Text>
              <Text className="solution">
                <MdVerified />
                8,886 solutions
              </Text>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .recentMain {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .excersizeContainer {
    width: 72%;
    display: flex;
    gap: 20px;
  }

  .mid_container {
    width: 72%;
    /* border: 1px solid; */
    margin-left: 25px;
  }
  .mid_container img {
    /* border: 1px solid; */
    width: 95%;
    margin: auto;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  .detailsContainer:hover {
    border-bottom: 4px solid #2424ee;
  }
  .detailsContainer .textContainer {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .solution {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #b7dcf1;
    border-radius: 20px;
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 900px) and (min-width: 750px) {
    .excersizeContainer {
      width: 100%;
    }
    .mid_container {
      width: 100%;
    }
    .detailsContainer .textContainer {
      width: 100%;
    }
    .detailsContainer .imageContainer {
    width: 100%;
  }
  }
  @media only screen and (max-width: 750px) {
    .detailsContainer {
    display: flex;
 flex-direction: column;
  }
    .excersizeContainer {
      width: 100%;
    }
    .mid_container {
      width: 100%;
    }
    .detailsContainer .textContainer {
      width: 100%;
    }
    .detailsContainer .imageContainer {
    width: 100%;
  }
  }
`;

export default Homepage;
