import { styled } from "styled-components";

export const DIV = styled.div`
  .top {
    display: flex;
    justify-content: space-around;
    /* margin-top: 60px; */
    padding: 30px;
  }
  .container p {
    display: flex;
    justify-content: flex-start;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .footerBotom {
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
  .icons {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .iconContainer {
    display: flex;
    gap: 25px;
  }
  @media only screen and (max-width: 900px) and (min-width: 750px) {
    .top {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 20px;
    }
  }
  @media only screen and (max-width: 750px) and (min-width: 350px) {
    .top {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 20px;
    }
  }
  @media only screen and (max-width: 350px) {
    .top {
      display: grid;
      grid-template-columns: auto;
      grid-gap: 20px;
    }
  }
`;
