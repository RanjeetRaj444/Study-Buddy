
import { Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProductBox from "./ProductBox";
import { getAllBooks } from "../../Redux/Books/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductTab = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.singleData.data);
    const [physics, setPhysics] = useState([]);
    const [chemistry, setChemistry] = useState([]);

    useEffect(() => {
        dispatch(getAllBooks());
    }, []);

    useEffect(() => {
        if (Array.isArray(data)) {
            const physicsBooks = data.filter((book) => book.category === "physics");
            const chemistryBooks = data.filter((book) => book.category === "Chemistry");

            setPhysics(physicsBooks);
            setChemistry(chemistryBooks);
        }
    }, [data]);

    return (
        <div>
            <Tabs mt={"20px"}>
                <TabList>
                    <Tab>Physics</Tab>
                    <Tab>Chemistry</Tab>
                    <Tab>Calculus</Tab>
                    <Tab>Engineering</Tab>
                    <Tab>Linear Algebra</Tab>
                    <Tab>Biology</Tab>
                    <Tab>Languages</Tab>
                    <Tab>Business</Tab>
                </TabList>

                <TabPanels mt={"15px"} pb={"50px"}>
                    <TabPanel>
                        <Grid templateColumns={"repeat(auto-fit, minmax(400px, 1fr))"} gap={"40px"}>
                            {physics.map((el) => {
                                return <ProductBox key={el._id} data={el} />;
                            })}
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <Grid templateColumns={"repeat(auto-fit, minmax(400px, 1fr))"} gap={"40px"}>
                            {chemistry.map((el) => {
                                return <ProductBox key={el._id} data={el} />;
                            })}
                        </Grid>
                    </TabPanel>
                    {/* Add other tab panels as needed */}
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default ProductTab;
