import styled from "styled-components";

export const SolutionContainer = styled.div`
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

export const SolutionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #bf9a13;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const BookDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  &:hover {
    background-color: #eee5e5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export const BookImage = styled.img`
  width: 180px;
  height: 250px;
  object-fit: cover;
  margin-right: 40px;

  border-radius: 5px;
  border: 2px solid #007bff;
`;

export const BookInfo = styled.div`
  flex: 1;
`;

export const BookAuthor = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111111;
`;

export const BookSolutionNo = styled.p`
  font-size: 17px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #585858;
`;

export const BookTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
  color: #585858;
  margin-bottom: 10px;
`;

export const BookCategory = styled.h1`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #585858;
`;

export const BookDescription = styled.p`
  font-size: 17px;
  margin-bottom: 10px;
  line-height: 1.6;
  color: #333;
  margin-left: 20px;
`;
