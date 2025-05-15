import {
  Grid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
} from "@chakra-ui/react";
import ProductBox from "./ProductBox";
import { getAllBooks } from "../../Redux/Books/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

let tabData = [
  "Physics",
  "Chemistry",
  "Calculus",
  "Engineering",
  "Linear Algebra",
  "Biology",
  "Languages",
  "Business",
];

const ProductTab = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.books.data);
  const [physics, setPhysics] = useState([]);
  const [chemistry, setChemistry] = useState([]);
  const isLoading = useSelector((state) => state.books.isLoading);
  const isError = useSelector((state) => state.books.isError);
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  useEffect(() => {
    if (Array.isArray(data)) {
      const physicsBooks = data.filter((book) => book.category === "physics");
      const chemistryBooks = data.filter(
        (book) => book.category === "Chemistry"
      );
      setPhysics(physicsBooks);
      setChemistry(chemistryBooks);
    }
  }, [data]);

  return (
    <div>
      <Tabs mt={"20px"}>
        <TabList className="tabs" style={{ overflow: "auto" }}>
          {tabData.map((ele, ind) => (
            <Tab key={ind}>{ele}</Tab>
          ))}
        </TabList>
        <TabPanels mt={"15px"} pb={"50px"}>
          {}

          {tabData.map((ele, ind) => (
            <TabPanel key={ind}>
              {!isLoading ? (
                <Grid
                  templateColumns={"repeat(auto-fit, minmax(400px, 1fr))"}
                  gap={"40px"}
                >
                  {Array.isArray(data) &&
                  data.filter(
                    (book) =>
                      `${book.category}`.toLocaleLowerCase() ===
                      ele.toLocaleLowerCase()
                  ).length > 0 ? (
                    data
                      .filter(
                        (book) =>
                          `${book.category}`.toLocaleLowerCase() ===
                          ele.toLocaleLowerCase()
                      )
                      .map((el) => <ProductBox key={el._id} data={el} />)
                  ) : (
                    <Heading>Data not found 😥❗</Heading>
                  )}
                </Grid>
              ) : (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ProductTab;
