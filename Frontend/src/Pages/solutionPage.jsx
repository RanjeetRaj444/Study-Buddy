// // author: "James Brown";
// // category: "physics";
// // chapter: (2)[("Chapter 1: Special Relativity", "Chapter 2: Quantum Mechanics")];
// // description: "Explore the world of modern physics, including relativity and quantum mechanics.";
// // exercise: (2)[
// //   ("Exercise 1: Time Dilation", "Exercise 2: Wave-Particle Duality")
// // ];
// // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QhxT3CGhg8bcwSYmJS7MLX3DgKVcmFAvUqBNbqeHdN0ckCU4P7Ej6hXMIY4YryguCk8&usqp=CAU";
// // solution: "Solution to Exercise 1: Calculate time dilation for a moving object.";
// // solution_No: 1;
// // title: "Modern Physics";
// // _id: "64bcc01032b082bdf7e04009";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneBook } from "../Redux/Books/action";
import styled from "styled-components"; // Import styled-components

const SolutionContainer = styled.div`
  max-width: 800px;

  border: 1px solid red;
  padding: 20px;
  background-color: #e5e8e7;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 30px;
  padding-bottom: 30px;
  font-family: "Roboto", sans-serif; /* Apply the Roboto font */
`;

const SolutionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #bf9a13;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const BookDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  &:hover {
    background-color: #eee5e5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

const BookImage = styled.img`
  width: 180px;
  height: 250px;
  object-fit: cover;
  margin-right: 40px;

  border-radius: 5px;
  border: 2px solid #007bff;
`;

const BookInfo = styled.div`
  flex: 1;
`;

const BookAuthor = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111111;
`;

const BookSolutionNo = styled.p`
  font-size: 17px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #585858;
`;

const BookTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
  color: #585858;
  margin-bottom: 10px;
`;

const BookCategory = styled.h1`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #585858;
`;

const BookDescription = styled.p`
  font-size: 17px;
  margin-bottom: 10px;
  line-height: 1.6;
  color: #333;
  margin-left: 20px;
`;


const SolutionPage = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleData.data);

  useEffect(() => {
    dispatch(getOneBook(id.id));
  }, []);

  // Check if data is null or undefined
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "#e5e8e7" }}>
      <SolutionContainer>
        <SolutionTitle>Welcome to Solution</SolutionTitle>
        <BookDetails>
          <BookImage src={data.image} alt="" style={{ marginLeft: "5px" }} />
          <BookInfo>
            <BookAuthor>{data.author}</BookAuthor>
            <BookSolutionNo>Solution No: {data.solution_No}</BookSolutionNo>
            <BookTitle>{data.title}</BookTitle>
            <BookCategory>Category: {data.category}</BookCategory>
          </BookInfo>
        </BookDetails>
        <div
          style={{
            marginRight: "30px",
            borderRadius: "20px",
            marginTop: "30px",
            backgroundColor: "white",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <BookDescription>{data.solution}</BookDescription>
        </div>
      </SolutionContainer>
    </div>
  );
};

export default SolutionPage;
