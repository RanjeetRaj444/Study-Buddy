import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getOneBook } from "../Redux/Books/action";
import {
  SolutionContainer,
  SolutionTitle,
  BookDetails,
  BookImage,
  BookInfo,
  BookAuthor,
  BookSolutionNo,
  BookTitle,
  BookCategory,
  BookDescription,
} from "../style/SolutionPage_Styles";

const SolutionPage = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.books.data);

  useEffect(() => {
    // dispatch(getOneBook(id.id));
  }, []);

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
