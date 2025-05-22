import { Box, Heading, Text, Button, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { newGetOneBooks } from "../Redux/Books/action";

const SingleBooksPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const CHUNK_SIZE = 6;

  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.books.data) || {};
  const isLoading = useSelector((state) => state.books.isLoading);

  useEffect(() => {
    dispatch(newGetOneBooks(params.subject, params.id));
  }, []);

  return (
    <DIV>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <div className="mainDiv">
          <Text color="gray" fontWeight="bold" mb={2}>
            Science / {data.category}
          </Text>
          <div className="bookDetailsContainer">
            <div className="imgContainer">
              <img src={data.image} alt={data.title || "Book"} />
            </div>
            <div className="textContainer">
              <Heading fontSize="1.5rem">{data.title}</Heading>
              <Text fontWeight="bold">
                <strong>{data.subject}</strong>
              </Text>
              <Text fontWeight="bolder">{data.class}th</Text>
              <Text color="gray" fontWeight="bold">
                14th Edition
              </Text>
              <Text color="gray" fontWeight="bold">
                ISBN: 9780134414232
              </Text>
            </div>
          </div>
          <div className="solHead">
            <Text fontWeight="bold">Textbook solutions</Text>
            <span className="solution">
              <MdVerified />
              Verified
            </span>
          </div>
          <div className="chapterContainer">
            <Accordion className="showHide" defaultIndex={[0]} allowMultiple>
              {data.questions?.slice(0, visibleCount).map((ele, ind) => (
                <AccordionItem key={ind} className="chapterDetails">
                  <h2>
                    <AccordionButton>
                      <Box
                        className="chapter"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        Topic : {ele.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="exercise" pb={4}>
                    <div className="qa">
                      <Heading fontSize="1.1rem" mb={2}>
                        Q : {ele.question}
                      </Heading>
                      <Text fontSize="0.97rem" color="gray.700">
                        <strong>Answer :</strong> {ele.answer}
                      </Text>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            {visibleCount < (data.questions?.length || 0) && (
              <Box textAlign="center" mt={4}>
                <Button
                  colorScheme="blue"
                  onClick={() => setVisibleCount((prev) => prev + CHUNK_SIZE)}
                >
                  Load More Questions
                </Button>
              </Box>
            )}
          </div>
          <Box className="infoBox">
            <Text fontSize="0.95rem" color="gray.700">
              At StudyBuddy, we’re giving you the tools you need to take on any
              subject without having to carry around solutions manuals or
              printing out PDFs! Now, with expert-verified solutions from
              Chemistry: The Central Science 14th Edition, you’ll learn how to
              solve your toughest homework problems. Our resource for Chemistry:
              The Central Science includes answers to chapter exercises, as well
              as detailed information to walk you through the process step by
              step. With expert solutions for thousands of practice problems,
              you can take the guesswork out of studying and move forward with
              confidence.
            </Text>
          </Box>
        </div>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  --main-bg: #fff;
  --main-radius: 22px;
  --main-shadow: 0 6px 32px rgba(35, 64, 142, 0.1),
    0 1.5px 8px rgba(35, 64, 142, 0.07);
  --border: 1.5px solid #e6eaf3;
  --primary: #23408e;
  --accent: #f8faff;
  --solution-bg: linear-gradient(90deg, #e6f2ff 60%, #d2e6fa 100%);
  --solution-border: 1.5px solid #b7dcf1;

  background: linear-gradient(120deg, #eaeef3 60%, #f8faff 100%);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .mainDiv {
    width: 80%;
    padding: 32px 40px;
    background: var(--main-bg);
    border-radius: var(--main-radius);
    box-shadow: var(--main-shadow);
    display: flex;
    flex-direction: column;
    gap: 40px;
    border: var(--border);
    border-radius: 1rem;
  }

  .bookDetailsContainer {
    display: flex;
    align-items: center;
    gap: 36px;
    flex-wrap: wrap;
    padding-bottom: 18px;
    border-bottom: var(--border);
  }
  .imgContainer {
    width: 150px;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgContainer img {
    width: 100%;
    max-width: 130px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(35, 64, 142, 0.13);
    background: #f5f5f5;
    object-fit: cover;
    border: var(--border);
  }
  .textContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .textContainer h2,
  .textContainer h1 {
    color: var(--primary);
    font-weight: 700;
  }

  .solHead {
    display: flex;
    align-items: center;
    gap: 18px;
    margin: 8px 0;
  }
  .solution {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--solution-bg);
    color: var(--primary);
    border-radius: 18px;
    font-weight: 700;
    font-size: 1.05rem;
    padding: 6px 22px;
    box-shadow: 0 2px 8px rgba(35, 64, 142, 0.09);
    letter-spacing: 0.5px;
    border: var(--solution-border);
  }
  .solution svg {
    color: #2b8a3e;
    font-size: 1.3em;
    vertical-align: middle;
  }

  .chapterContainer {
    margin-top: 10px;
    height: 434px;
    overflow: auto;
  }
  .showHide {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .chapterDetails {
    background-color: var(--accent);
    border-radius: 14px;
    padding: 14px 22px;
    box-shadow: 0 2px 8px rgba(35, 64, 142, 0.06);
    border: var(--border);
    transition: box-shadow 0.2s, border 0.2s;
  }
  .chapterDetails:focus-within,
  .chapterDetails:hover {
    box-shadow: 0 4px 16px rgba(35, 64, 142, 0.13);
    border: 1.5px solid #7171f8;
  }
  .chapter {
    font-weight: 700;
    color: var(--primary);
    font-size: 1.08rem;
  }
  .exercise {
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 12px 16px;
    border: 1px solid #e6eaf3;
  }
  .qa {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .qa h2,
  .qa h3,
  .qa h4 {
    color: var(--primary);
    font-weight: 600;
  }

  .infoBox {
    background: var(--accent);
    border-radius: 14px;
    padding: 20px 24px;
    margin-top: 18px;
    box-shadow: 0 1px 6px rgba(35, 64, 142, 0.06);
    border: var(--border);
    font-size: 1.01rem;
    color: var(--primary);
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    .mainDiv {
      width: 98%;
      padding: 16px 4vw;
      border-radius: 14px;
    }
    .bookDetailsContainer {
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;
      padding-bottom: 10px;
    }
    .imgContainer {
      width: 100%;
      max-width: 120px;
      margin-bottom: 8px;
    }
    .imgContainer img {
      max-width: 100px;
    }
    .chapterDetails {
      padding: 10px 8px;
    }
    .infoBox {
      padding: 14px 8px;
    }
  }

  @media (max-width: 600px) {
    padding: 0.8rem;
    .mainDiv {
      width: 100%;
      padding: 8px 2vw;
      box-shadow: none;
    }
    .imgContainer img {
      max-width: 70px;
      border-radius: 6px;
    }
    .chapterDetails {
      padding: 8px 4px;
      border-radius: 8px;
    }
    .infoBox {
      padding: 10px 4px;
      font-size: 0.97rem;
      border-radius: 8px;
    }
    .solHead {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
`;

export default SingleBooksPage;
