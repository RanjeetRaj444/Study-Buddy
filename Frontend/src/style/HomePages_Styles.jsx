import { styled } from "styled-components";

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .recentMain {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .excersizeContainer {
    width: 72%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .mid_container {
    width: 72%;
    /* border: 1px solid; */
    margin-left: 25px;
  }
  .mid_container img {
    /* border: 1px solid; */
    width: 95%;
    margin: auto;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .detailsContainer {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid; */
    padding: 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .detailsContainer .imageContainer {
    width: 30%;
  }
  .detailsContainer img {
    /* width: 30%; */
    border-radius: 10px;
  }
  .detailsContainer:hover {
    border-bottom: 4px solid #2424ee;
  }
  .detailsContainer .textContainer {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .solution {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: #b7dcf1;
    border-radius: 20px;
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 800px) {
    .excersizeContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 470px) {
    .excersizeContainer {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media only screen and (max-width: 900px) and (min-width: 750px) {
    .excersizeContainer {
      width: 100%;
    }
    .mid_container {
      width: 100%;
    }
    .detailsContainer .textContainer {
      width: 100%;
    }
    .detailsContainer .imageContainer {
      width: 100%;
    }
  }
  @media only screen and (max-width: 750px) {
    .detailsContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* text-align: center; */
    }
    .excersizeContainer {
      width: 100%;
    }
    .mid_container {
      width: 100%;
    }
    .detailsContainer .textContainer {
      width: 100%;
    }
    .detailsContainer .imageContainer {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
