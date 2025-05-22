import { styled } from "styled-components";
import { MdVerified } from "react-icons/md";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductBox = ({ data }) => {
  return (
    <DIV>
      <Link to={`/books/${data.subject}/${data._id}`}>
        <div className="detailsContainer">
          <div className="imageContainer">
            <img src={data.image} alt="" />
          </div>
          <div className="textContainer">
            <div>
              <Text fontWeight={"semibold"} fontSize={"lg"}>
                {data.subject}
              </Text>
              <Text fontSize={"sm"}>{data.description}</Text>
              <Text fontSize={"sm"}>
                <strong>Author :-</strong> {data.author}
              </Text>
              <Text fontSize={"sm"}>
                <strong>Class :-</strong> {data.class}th
              </Text>
            </div>
            <Text className="solution">
              <span className="icon">
                <MdVerified />
              </span>
              {Math.floor(Math.random() * 9999)} solutions
            </Text>
          </div>
        </div>
      </Link>
    </DIV>
  );
};

const DIV = styled.div`
  .detailsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: 15px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    background: #fff;
    transition: border-bottom 0.2s;
    min-height: 160px;
    width: 100%;
    gap: 18px;
  }
  .detailsContainer:hover {
    border-bottom: 4px solid #7171f8;
  }
  .imageContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imageContainer img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    max-height: 120px;
    background: #f5f5f5;
  }

  .solution {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #e6f2ff;
    border-radius: 20px;
    padding: 7px 18px;
    font-size: 1rem;
    font-weight: 600;
    color: #23408e;
    box-shadow: 0 2px 8px rgba(35, 64, 142, 0.07);
    min-width: 120px;
    margin-top: 14px;
    width: fit-content;
    transition: background 0.2s;
  }
  .solution .icon {
    display: flex;
    align-items: center;
  }
  .solution .icon svg {
    font-size: 1.25em;
    color: #2b8a3e;
    vertical-align: middle;
  }

  @media (max-width: 900px) {
    .detailsContainer {
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
      min-height: unset;
    }
    .imageContainer,
    .textContainer {
      width: 100%;
      min-width: unset;
    }
    .imageContainer img {
      max-height: 180px;
    }
    .solution {
      margin-top: 10px;
      font-size: 0.98rem;
      padding: 6px 14px;
    }
  }

  @media (max-width: 600px) {
    .detailsContainer {
      padding: 10px;
      border-radius: 14px;
      gap: 10px;
    }
    .imageContainer img {
      max-height: 120px;
    }
    .solution {
      font-size: 0.93rem;
      padding: 5px 10px;
      min-width: 90px;
      margin-top: 8px;
    }
  }
`;

export default ProductBox;
