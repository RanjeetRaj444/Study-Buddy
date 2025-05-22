import { styled } from "styled-components";

export const DIV = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8faff;
  padding-bottom: 40px;

  .recentMain {
    width: 90%;
    max-width: 1200px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .excersizeContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 28px;
    margin-top: 18px;
    width: 100%;
  }

  .detailsContainer {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(35, 64, 142, 0.07);
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 18px 16px;
    gap: 18px;
    transition: box-shadow 0.2s, transform 0.2s;
    min-height: 140px;
    cursor: pointer;
    border: 1.5px solid transparent;
  }
  .detailsContainer:hover {
    box-shadow: 0 6px 24px rgba(35, 64, 142, 0.13);
    border: 1.5px solid #7171f8;
    transform: translateY(-3px) scale(1.02);
  }

  .imageContainer {
    width: 90px;
    min-width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imageContainer img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 12px;
    background: #f5f5f5;
    box-shadow: 0 1px 4px rgba(35, 64, 142, 0.06);
  }

  .textContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    width: 100%;
  }

  .solution {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #e6f2ff;
    color: #23408e;
    border-radius: 16px;
    font-weight: 600;
    font-size: 0.98rem;
    padding: 4px 14px;
    margin-top: 7px;
    box-shadow: 0 1px 4px rgba(35, 64, 142, 0.06);
  }
  .solution svg {
    color: #2b8a3e;
    font-size: 1.2em;
    vertical-align: middle;
  }

  .mid_container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }
  .mid_container img {
    width: 100%;
    max-width: 420px;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(35, 64, 142, 0.09);
  }

  /* Tablet */
  @media (max-width: 900px) {
    .recentMain {
      width: 98%;
    }
    .excersizeContainer {
      gap: 18px;
    }
    .detailsContainer {
      flex-direction: column;
      align-items: flex-start;
      min-height: unset;
      padding: 14px 10px;
    }
    .imageContainer {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 8px;
    }
    .imageContainer img {
      width: 70px;
      height: 70px;
    }
    .mid_container img {
      max-width: 320px;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .recentMain {
      margin: 24px auto 0 auto;
    }
    .excersizeContainer {
      gap: 12px;
    }
    .detailsContainer {
      padding: 10px 6px;
      border-radius: 10px;
    }
    .imageContainer img {
      width: 54px;
      height: 54px;
      border-radius: 8px;
    }
    .mid_container img {
      max-width: 98vw;
      border-radius: 10px;
    }
  }
`;