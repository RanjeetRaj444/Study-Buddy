import { Heading, Text } from "@chakra-ui/react";
import React from "react";

import { MdVerified } from "react-icons/md";
import home_Pic from "../Assets/home_pic.png";
import { DIV } from "../style/HomePages_Styles";

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

export default Homepage;
