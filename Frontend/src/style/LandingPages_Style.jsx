import { styled } from "styled-components";

export const DIV = styled.div`
  box-sizing: border-box;
  .Top_containertion {
    background-image: url(${(props) => props.image1});
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .Top_containertion div {
    width: 40%;
    justify-content: center;
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .topContainer {
    height: 100%;
    color: white;
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
    background-color: #4d4dec;
    color: white;
  }
  .seccondBtn:hover {
    width: 50%;
    background-color: #2b2bf6;
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
  }
  .studentLove div {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 30%;
  }
  .studentLove div p {
    padding: 15px;
  }
  .bottom {
    margin-top: 100px;
    padding: 130px 2px;
    background-color: #cacaeb;
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
  @media only screen and (max-width: 1100px) {
    .topContainer {
      margin: 0px 100px;
      padding: 100px 0px;
    }
    .Top_containertion div {
      gap: 20px;
    }
    .container {
      width: 80%;
      margin-top: 70px;
    }
    .container .container-Right,
    .container-Left {
      width: 45%;
      display: flex;
      gap: 10px;
    }
    .seccondBtn {
      width: 100%;
    }
  }
  @media only screen and (max-width: 900px) and (min-width: 750px) {
    .topContainer {
      margin: 0px 50px;
      padding: 50px 0px;
    }
    .Top_containertion div {
      gap: 20px;
    }
    .seccondBtn {
      width: 100%;
    }
  }
  @media only screen and (max-width: 750px) {
    .topContainer {
      margin: 0px 10px;
      padding: 10px 0px;
      /* gap: 20px; */
    }
    .Top_containertion div {
      width: 70%;
      gap: 5px;
    }
    .Top_containertion {
      background-size: auto;
    }
    .container {
      width: 80%;
      margin-top: 70px;
      flex-direction: column;
      gap: 12px;
    }
    .container .container-Right,
    .container-Left {
      width: 100%;
      display: flex;

      gap: 10px;
    }
    .container_Heading {
      font-size: 1.3rem;
    }
    .p {
      font-size: 1.3rem;
    }
    .container_Desc {
      font-size: 0.7rem;
    }
    .work p {
      font-size: 0.7rem;
    }
    .studentLove {
      width: 80%;
      flex-direction: column;
      gap: 20px;
    }
    .studentLove div {
      width: 100%;
    }
    .seccondBtn {
      width: 100%;
    }
    .containers {
      flex-direction: column;
      gap: 20px;
    }
    .containers .container-Right,
    .container-Left {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
