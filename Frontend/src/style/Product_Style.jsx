import styled from "styled-components";

export const DIV = styled.div`
  /* Top Section */
  .topSec {
    width: 100%;
    background-color: #f2f5ff;
    background-image: url("https://quizlet.com/_next/static/media/landing-page-header-jagged-lines-day.ea330eb6.svg");
    background-repeat: no-repeat;
    background-size: 62.5% auto;
    background-position: top right;
  }
  .topSecUpperBox {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 320px;
    gap: 2vw;
  }
  .topSecHeading {
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 15px;
  }
  .topSecHeading img {
    width: 32px;
    min-width: 24px;
    max-width: 40px;
    height: auto;
  }
  .topSecImages {
    display: flex;
    width: 43%;
    justify-content: flex-end;
    gap: 16px;
    align-items: flex-end;
  }
  .topSecImages img {
    width: 100%;
    max-width: 180px;
    height: auto;
    display: block;
  }
  .topSecLowerBox,
  .productContainer {
    width: 70%;
    margin: 40px auto;
    padding:1rem;
  }
  .productContainer {
    margin-top: 60px;
  }

  /* Info Section */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 100px auto;
    gap: 40px;
  }
  .container-Right,
  .container-Left {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .container-Left img,
  .container-Right img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 12px;
    object-fit: contain;
  }

  /* FAQ Section */
  .faqSec {
    width: 70%;
    margin: 60px auto;
  }

  /* Download Buttons */
  .downloadButton {
    margin-top: 15px;
    display: flex;
    gap: 15px;
  }
  .downloadButton button {
    width: 37%;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .downloadButton button img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Feedback Section */
  .feedbackSec {
    width: 70%;
    margin: 100px auto;
  }
  .heading {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: xx-large;
    font-weight: bold;
  }
  .innerFeedbackSec {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    gap: 24px;
    flex-wrap: wrap;
  }
  .feedbackBox {
    width: 30%;
    min-width: 220px;
    background-color: #f1f1f1;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 33px;
    justify-content: space-between;
    height: 220px;
    box-sizing: border-box;
  }
  .innerFeedbackBox {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .innerFeedbackBox img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }

  /* Responsive Design */
  @media screen and (max-width: 1023px) {
    .topSecLowerBox,
    .productContainer,
    .faqSec,
    .feedbackSec {
      width: 90%;
    }
    .container {
      flex-direction: column;
      gap: 40px;
      width: 90%;
      margin: 40px auto;
    }
    .container-Right,
    .container-Left {
      width: 100%;
    }
    .innerFeedbackSec {
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .feedbackBox {
      width: 45%;
      min-width: 180px;
    }
  }

  @media screen and (max-width: 767px) {
    .topSecLowerBox,
    .productContainer,
    .faqSec,
    .feedbackSec {
      width: 98%;
      margin: 20px auto;
    }
    .container {
      flex-direction: column;
      gap: 20px;
      width: 98%;
      margin: 40px auto;
    }
    .container-Right,
    .container-Left {
      width: 100%;
    }
    .feedbackSec {
      margin: 60px auto;
    }
    .innerFeedbackSec {
      flex-direction: column;
      gap: 40px;
    }
    .feedbackBox {
      width: 100%;
      min-width: unset;
    }
    .topSecUpperBox {
      flex-direction: column;
      height: auto;
      gap: 24px;
      align-items: flex-start;
    }
    .topSecHeading,
    .topSecImages {
      width: 100%;
    }
    .topSecImages {
      justify-content: flex-start;
    }
  }
`;