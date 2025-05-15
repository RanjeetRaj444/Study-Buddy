import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { getOneBook } from "../Redux/Books/action";
const SingleBooksPage = () => {
  const [color, setColor] = React.useState(0);
  const Id = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.books.data) || [];

  useEffect(() => {
    dispatch(getOneBook(Id.id));
  }, []);

  return (
    <DIV>
      <div className="mainDiv">
        <Text color={"gray"} fontWeight={"bold"}>
          Science / {data.category}
        </Text>
        <div className="bookDetailsContainer">
          <div className="imgContainer">
            <img src={data.image} alt="" />
          </div>
          <div className="textContainer">
            <Heading fontSize={"1.5rem"}>{data.title}</Heading>
            <Text color={"gray"} fontWeight={"bold"}>
              14th Edition
            </Text>
            <Text color={"gray"} fontWeight={"bold"}>
              ISBN: 9780134414232
            </Text>
            <Text color={"gray"} fontWeight={"bold"}>
              {data.author}
            </Text>
          </div>
        </div>
        <div className="solHead">
          <Text fontWeight={"bold"}>Textbook solutions</Text>
          <Text className="solution">
            <MdVerified />
            Verified
          </Text>
        </div>
        <div className="chapterContainer">
          <Accordion className="showHide" defaultIndex={[0]} allowMultiple>
            {data.chapter &&
              data.chapter.map((ele, ind) => (
                <AccordionItem key={ind} className="chapterDetails">
                  <h2>
                    <AccordionButton>
                      <Box
                        className="chapter"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        {ele}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="excersize" pb={4}>
                    <div>
                      {data.exercise &&
                        data.exercise.map((ele, ind) => (
                          <Text
                            onClick={() => setColor(ind)}
                            style={{
                              backgroundColor:
                                color === ind ? "skyblue" : "white",
                            }}
                            className="chaptername"
                            key={ind}
                          >
                            {ele}
                          </Text>
                        ))}
                    </div>
                    <div>
                      {data.exercise &&
                        data.exercise.map((ele, ind) => (
                          <Text key={ind}>
                            <Link to={`/solution/${data._id}`}>
                              Exercise {ind + 1}
                            </Link>
                          </Text>
                        ))}
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
        <div>
          <Text fontSize={"0.8rem"}>
            At Quizlet, we’re giving you the tools you need to take on any
            subject without having to carry around solutions manuals or printing
            out PDFs! Now, with expert-verified solutions from Chemistry: The
            Central Science 14th Edition, you’ll learn how to solve your
            toughest homework problems. Our resource for Chemistry: The Central
            Science includes answers to chapter exercises, as well as detailed
            information to walk you through the process step by step. With
            expert solutions for thousands of practice problems, you can take
            the guesswork out of studying and move forward with confidence.
          </Text>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  background-color: #eaeef3;

  .mainDiv {
    width: 70%;
    padding: 15px 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .bookDetailsContainer {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  .bookDetailsContainer .textContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .bookDetailsContainer .imgContainer {
    width: 20%;
  }
  .imgContainer img {
    border-radius: 5px;
  }
  .solHead {
    display: flex;
    gap: 12px;
  }
  .solution {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #c7f7e6;
    border-radius: 20px;
  }
  .showHide {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .chapterDetails {
    background-color: white;
    border-radius: 12px;
    padding: 12px;
  }
  .chapter {
    font-weight: bold;
  }
  .excersize {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .excersize div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-right: 2px solid;
    padding: 12px;
  }
  .chaptername {
    padding: 12px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (max-width: 768px) {
    .mainDiv {
      width: 100%;
    }
  }
`;

export default SingleBooksPage;
