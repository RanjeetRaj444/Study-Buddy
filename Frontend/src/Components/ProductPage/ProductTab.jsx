import {
  Grid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
  Box,
  Select,
} from "@chakra-ui/react";
import ProductBox from "./ProductBox";
import { newGetAllBooks } from "../../Redux/Books/action";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const tabData = [
  "Physics",
  "Chemistry",
  "Calculus",
  "Engineering",
  "Linear Algebra",
  "Biology",
  "Languages",
  "Business",
];

const classOptions = [
  "All",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "Undergraduate",
  "Postgraduate",
];

const ProductTab = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.books.data) || [];
  const isLoading = useSelector((state) => state.books.isLoading);
  const [selectedSubject, setSelectedSubject] = useState(tabData[0]);
  const [selectedClass, setSelectedClass] = useState("All");

  const handleSubject = useCallback(
    (subject) => {
      setSelectedSubject(subject);
      dispatch(newGetAllBooks(subject.toLowerCase()));
      setSelectedClass("All"); // Reset class filter on subject change
    },
    [dispatch]
  );

  useEffect(() => {
    handleSubject(tabData[0]);
  }, [handleSubject]);

  // Filter data by class
  const filteredData =
    selectedClass === "All"
      ? data
      : data.filter(
          (el) => String(el.class).toLowerCase() === selectedClass.toLowerCase()
        );

  return (
    <Box
      bg="#f8faff"
      borderRadius="2xl"
      boxShadow="md"
      p={{ base: 2, md: 6 }}
      mt={4}
    >
      <Tabs
        mt="10px"
        index={tabData.indexOf(selectedSubject)}
        onChange={(idx) => handleSubject(tabData[idx])}
        variant="unstyled"
      >
        <TabList
          className="tabs"
          style={{ overflowX: "auto" }}
          bg="white"
          borderRadius="xl"
          boxShadow="sm"
          p={2}
          mb={4}
        >
          {tabData.map((ele, idx) => (
            <Tab
              key={ele}
              fontWeight="semibold"
              fontSize={{ base: "sm", md: "md" }}
              color={selectedSubject === ele ? "#23408e" : "gray.600"}
              bg={selectedSubject === ele ? "#e6f2ff" : "transparent"}
              borderRadius="md"
              mx={1}
              px={4}
              py={2}
              _selected={{
                color: "#23408e",
                bg: "#e6f2ff",
                fontWeight: "bold",
                boxShadow: "md",
              }}
              _focus={{ boxShadow: "outline" }}
              transition="all 0.2s"
            >
              {ele}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt="10px" pb="30px">
          {tabData.map((ele) => (
            <TabPanel key={ele} px={0}>
              <Box mb={4} maxW="220px">
                <Select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  bg="white"
                  borderRadius="md"
                  boxShadow="sm"
                  fontWeight="semibold"
                >
                  {classOptions.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls === "All" ? "All Classes" : `Class ${cls}`}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                p={{ base: 2, md: 6 }}
                minH="220px"
                transition="box-shadow 0.2s"
              >
                {!isLoading ? (
                  <Grid
                    templateColumns={{
                      base: "1fr",
                      sm: "1fr",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                      xl: "repeat(4, 1fr)",
                    }}
                    gap={{ base: "20px", md: "30px", lg: "40px" }}
                  >
                    {Array.isArray(filteredData) && filteredData.length > 0 ? (
                      filteredData.map((el) => (
                        <ProductBox key={el._id} data={el} />
                      ))
                    ) : (
                      <Box
                        gridColumn="1/-1"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        minH="180px"
                        w="100%"
                      >
                        <Heading size="md" color="gray.500" mb={2}>
                          Data not found 😥❗
                        </Heading>
                        <Box fontSize="lg" color="gray.400">
                          Try another class or subject tab!
                        </Box>
                      </Box>
                    )}
                  </Grid>
                ) : (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minH="220px"
                  >
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Box>
                )}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProductTab;
