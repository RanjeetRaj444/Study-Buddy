import React from "react";
import Footer from "./Footer";
import { Button, Heading, Text } from "@chakra-ui/react";
import { styled } from "styled-components";
import image1 from "../Assets/landingPageImage.avif";
import learn from "../Assets/learn.svg";
import smart from "../Assets/Smart Grading.svg";
import test from "../Assets/Test.svg";
import solution from "../Assets/Solutions.svg";
import step from "../Assets/Step by Step.svg";
import Textbook from "../Assets/Textbook Solutions.svg";
const LandingPage = () => {
  return (
    <DIV image1={image1}>
      <div className="bodyPart">
        <div className="Top_containertion">
          <div className="topContainer">
            <Heading fontSize={"42px"} fontWeight={"bold"}>
              The best digital flashcards and study tools
            </Heading>
            <p style={{ fontWeight: "bold" ,fontSize:"22px"}}>
              Join over 60 million students using StudyBuddy's science-backed
              flashcards, practice tests and expert solutions to improve their
              grades and reach their goals.
            </p>
            <Button className="seccondBtn">Sign up for free</Button>
          </div>
        </div>
        <Heading className="heading">
          90% of students who use StudyBuddy report receiving higher grades
        </Heading>
        <div className="container">
          <div className="container-Left">
            <Heading>Memorize faster for free</Heading>
            <p>
              Research shows that testing yourself with flashcards is more
              effective than rereading your notes. From math to medicine to
              modern languages, StudyBuddy is used by students in over 100
              different subjects.
            </p>
            <Button className="seccondBtn">Get Started</Button>
          </div>
          <div className="container-Right">
            <img
              src="https://images.prismic.io/quizlet-prod/31c85d7d-9e36-40a4-9fae-5027c355ddee_Flashcards-1.gif?auto=compress,format"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="container-Left">
            <img
              src="https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format"
              alt=""
            />
          </div>
          <div className="container-Right">
            <Heading>Yesterday’s commute, today’s study session</Heading>
            <p>
              Study anywhere — even offline — with our iOS and Android apps.
              Your progress syncs across your phone and computer.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="container-Left">
            <div>
              <Heading>Be ready for test day with Learn and Test</Heading>
              <p>
                Go beyond memorization with different question types designed to
                help you really get it.
              </p>
            </div>
            <div>
              <div className="work">
                <img src={learn} alt="" />
                <div>
                  <Heading className="p">Practice with Learn</Heading>
                  <p>
                    Get instant feedback while practicing with multiple choice,
                    true or false, written questions and more.
                  </p>
                </div>
              </div>
              <div className="work">
                <img src={test} alt="" />
                <div>
                  <Heading className="p">Begin a Test</Heading>
                  <p>
                    Get a sense of your study progress by taking a practice test
                    so you can feel prepared for your exam.
                  </p>
                </div>
              </div>
              <div className="work">
                <img src={smart} alt="" />
                <div>
                  <Heading className="p">Get max results</Heading>
                  <p>
                    94% of students who use Learn or Test say that Quizlet helps
                    them get better grades.
                  </p>
                </div>
              </div>
            </div>
            <Button className="seccondBtn">Explore Learn and Test</Button>
          </div>
          <div className="container-Right">
            <img
              src="https://images.prismic.io/quizlet-prod/23a19326-20bc-47c2-98d8-0534f8661b8c_LearnandTest-1.gif?auto=compress,format"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="container-Right">
            <img
              src="https://images.prismic.io/quizlet-prod/f26af523-4f77-4676-9646-e437ab1e7062_homepageexpert2.gif?auto=compress,format"
              alt=""
            />
          </div>
          <div className="container-Left">
            <div>
              <Heading>Get homework help with expert solutions</Heading>
              <p>
              StudyBuddy expert solutions show you step-by-step approaches to
                solve tough problems. Find millions of solutions in your
                subjects.
              </p>
            </div>
            <div>
              <div className="work">
                <img src={solution} alt="" />
                <div>
                  <Heading className="p">Practice with Learn</Heading>
                  <p>
                    Get instant feedback while practicing with multiple choice,
                    true or false, written questions and more.
                  </p>
                </div>
              </div>
              <div className="work">
                <img src={step} alt="" />
                <div>
                  <Heading className="p">Begin a Test</Heading>
                  <p>
                    Get a sense of your study progress by taking a practice test
                    so you can feel prepared for your exam.
                  </p>
                </div>
              </div>
              <div className="work">
                <img src={Textbook} alt="" />
                <div>
                  <Heading className="p">Get max results</Heading>
                  <p>
                    94% of students who use Learn or Test say that Quizlet helps
                    them get better grades.
                  </p>
                </div>
              </div>
            </div>
            <Button className="seccondBtn">Find your answer</Button>
          </div>
        </div>
        <div className="bottomsec">
          <Heading className="secLast">
            What students love about StudyBuddy
          </Heading>
          <div className="studentLove">
            <div>
              <img
                src="https://images.prismic.io/quizlet-prod/8568c5a7-2554-43c5-81bf-322169240769_Image+%2812%29.png?auto=compress,format&rect=0,4,310,228&w=286&h=210"
                alt=""
              />
              <p>
                “StudyBuddy has been supporting my success since high school.
                Flashcards available on the go are single-handedly getting me
                through university.”
              </p>
            </div>
            <div>
              <img
                src="https://images.prismic.io/quizlet-prod/17a32b86-e009-47f6-acb0-cdc8e89d35c4_06Sydney+1.png?auto=compress,format&rect=0,10,930,683&w=286&h=210"
                alt=""
              />
              <Text>
                “Learn mode is the best thing that's ever come out of StudyBuddy.
                It shows you terms in a way that makes it easiest to remember.”
              </Text>
            </div>
            <div>
              <img
                src="https://images.prismic.io/quizlet-prod/8160414d-ed6b-41ce-9654-18fc839916f6_oscar+and+owen+photo+for+us+homepage_fullsize+%281%29+1.png?auto=compress,format&rect=0,8,793,582&w=286&h=210"
                alt=""
              />
              <Text>
                "All our friends use StudyBuddy. It's a fun way to study and we
                feel more confident preparing for our midterms and finals."
              </Text>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="containers">
            <div className="container-Left">
              <div>
                <Text fontSize={"22px"} fontWeight={"bold"}>
                  TEACHERS
                </Text>
                <Heading>Empower your students</Heading>
              </div>
              <p style={{ fontSize: "22px" }}>
                Engage and motivate all students with curriculum-based
                materials, in-class activities and at-home study tools on any
                topic. StudyBuddy is free for both you and your students to sign
                up.
              </p>
              <Button className="seccondBtn">Create a free account</Button>
            </div>
            <div className="container-Right">
              <img
                src="https://images.prismic.io/quizlet-prod/d5b00568-a324-488f-b16b-44480144cb81_Image+for+Text+Callout+%283%29.png?auto=compress,format"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerPart">
        <Footer />
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  .Top_containertion {
    width: 100%;
    height: 800px;
    background-image: url(${(props) => props.image1});
    background-size: cover;
  }
  .Top_containertion div {
    width: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* color: white; */
  }
  .topContainer {
    height: 100%;
    /* margin-top: 400px; */
    margin: 0px 200px;
    padding: 200px 0px;
  }
  .heading {
    width: 80%;
    margin: auto;
    margin-top: 70px;
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    margin-top: 100px;
  }
  .container .container-Right,
  .container-Left {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .work {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }
  .work p {
    display: flex;
    justify-content: flex-start;
  }
  .p {
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-start;
  }
  .seccondBtn {
    width: 50%;
    background-color: blue;
    color: white;
  }
  .seccondBtn:hover {
    width: 50%;
    background-color: #3535fc;
    color: white;
  }
  .bottomsec {
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
  .secLast {
    text-align: center;
  }
  .studentLove {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }
  .studentLove div {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 30%;
  }
  .studentLove div p {
    /* width: 30%;/ */
    padding: 15px;
    /* font-size: 2px; */
  }
  .bottom {
    margin-top: 100px;
    padding: 130px 2px;
    background-color: #b8b8f5;
    /* display: flex; */
  }
  .containers {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
  }
  .containers .container-Right,
  .container-Left {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 70px;
  }
`;
export default LandingPage;
