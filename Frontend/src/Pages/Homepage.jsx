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
                src="https://m.media-amazon.com/images/I/91kkk-xBuOL.jpg"
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
                src="https://m.media-amazon.com/images/I/91kkk-xBuOL.jpg"
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
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/t/s/e/advanced-engineering-mathematics-original-imah7zcxrqy83vrr.jpeg?q=90&crop=false"
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
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672870747i/75579842.jpg"
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
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677792111i/1101295.jpg"
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
                src="https://slideplayer.com/10376536/35/images/slide_1.jpg"
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
