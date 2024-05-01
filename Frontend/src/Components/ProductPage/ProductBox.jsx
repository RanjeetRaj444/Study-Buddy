import { styled } from "styled-components";
import { MdVerified } from "react-icons/md";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductBox = ({ data }) => {
	return (
		<DIV>
			<Link to={`/books/${data._id}`}>
				<div className="detailsContainer">
					<div className="imageContainer">
						<img src={data.image} alt="" />
					</div>
					<div className="textContainer">
						<div>
							<Text fontWeight={"semibold"} fontSize={"lg"}>
								{data.title}
							</Text>
							<Text fontSize={"sm"}>{data.description}</Text>
							<Text fontSize={"sm"}>{data.author}</Text>
						</div>
						<Text className="solution">
							<MdVerified />
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
		justify-content: space-between;
		padding: 15px;
		border-radius: 20px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		/* height: 180px; */
    /* width: 100%; */
	}
	.imageContainer {
		width: 30%;
	}
	.imageContainer img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.detailsContainer:hover {
		border-bottom: 4px solid #7171f8;
	}
	.textContainer {
		width: 65%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.textContainer div {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.solution {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		background-color: #b7dcf1;
		border-radius: 20px;
	}
	@media (max-width: 475px) {
    link{
      width: 80%;
    }
		.detailsContainer {
			flex-direction: column;
      /* width: 80%; */
      justify-content: center;
      overflow: auto;
		}
	}
`;

export default ProductBox;
