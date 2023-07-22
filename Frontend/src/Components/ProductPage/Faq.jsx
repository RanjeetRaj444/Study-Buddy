import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export const Faq = () => {

    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2 style={{padding:"13px 0px"}}>
                        <AccordionButton>
                            <Box fontWeight={"semibold"} fontSize={"22px"} flex='1' textAlign='left'>
                                Are StuddyBuddy textbook solutions good?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={5} fontSize={"lg"}>
                        Yes! According to student feedback, StuddyBuddy's textbook solutions are regarded as the highest-quality answers and explanations available. This is because the solutions are written and verified by subject matter experts. Each solution is broken down into steps so that students can learn each core concept before moving onto the next, reducing overwhelm and improving comprehension and confidence. When grades are at stake, the reliability of expert-produced solutions is key
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 style={{padding:"13px 0px"}}>
                        <AccordionButton>
                            <Box fontWeight={"semibold"} fontSize={"22px"} flex='1' textAlign='left'>
                                Is StuddyBuddy cheaper than Chegg's textbook solutions?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={5} fontSize={"lg"}>
                        Yes! Textbook solutions are available on StuddyBuddy Plus for around $7.99/mo., while Chegg's homework help is advertised to start at $15.95/mo. StuddyBuddy Plus helps you get better grades in less time with smart and efficient premium study modes, access to millions of textbook solutions, and an ad-free experience.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 style={{padding:"13px 0px"}}>
                        <AccordionButton>
                            <Box fontWeight={"semibold"} fontSize={"22px"} flex='1' textAlign='left'>
                                Are StuddyBuddy's textbook solutions free?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={5} fontSize={"lg"}>
                        StuddyBuddy offers a selection of free textbook solutions so that you can sample the product quality and capabilities before signing up for full access with StuddyBuddy Plus.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 style={{padding:"13px 0px"}}>
                        <AccordionButton>
                            <Box fontWeight={"semibold"} fontSize={"22px"} flex='1' textAlign='left'>
                                Where can I find textbook answers?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={5} fontSize={"lg"}>
                        You can browse textbook solutions by chapter or simply type in the name of your textbook, ISBN, or your question into the search bar. Instantly view millions of verified solutions from the most popular textbooks..
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
