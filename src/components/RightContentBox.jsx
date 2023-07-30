import { Box, Center, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react';
import Polygon1 from "../assets/Polygon 1.svg";
import PolyGon2 from "../assets/Polygon 2.svg";

const RightContentBox = () => {
    return (
        <Box width={"774px"} fontFamily={"Inter"} height={"1024px"}>

            <h4 style={{ textAlign: "end", color: "#8692A6" }}>Already have an account? <span style={{ color: "#1565D8" }}>Sign In</span></h4>

            <Center marginTop={"135px"}>

                <Box margin={"auto"}>

                    <Heading fontSize={"30px"} fontWeight={700}>
                        Join Us!
                    </Heading>

                    <Box w={"411px"} >
                        <Text fontSize={"18px"} fontWeight={400} lineHeight={"28px"} color={"#8692A6"}>To begin this journey, tell us what type of account you’d be opening.</Text>
                    </Box>

                    <Box w={"426px"} height={"108px"} border="1px solid #1565D8" bg={"#F5F9FF"} boxShadow={"0px 4px 14px 1px rgba(0, 0, 0, 0.04)"} borderRadius={"6px"}>
                        <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>
                            <Img src={Polygon1} width={"52px"} height={"52px"} />
                            <Box>
                                <Text fontSize={" 16px"} fontWeight={400} color={"#000"} lineHeight={"normal"}>Individual</Text>
                                <Text width={"264px"} color={"#8692A6"} fontSize={"14px"}>Personal account to manage all you activities.</Text>
                            </Box>
                        </Flex>

                    </Box>


                    <Box w={"426px"} height={"108px"} marginTop={"20px"} border="1px solid #1565D8" bg={"#F5F9FF"} boxShadow={"0px 4px 14px 1px rgba(0, 0, 0, 0.04)"} borderRadius={"6px"}>

                        <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>

                            <Img src={PolyGon2} width={"52px"} height={"52px"} />

                            <Box>
                                <Text fontSize={" 16px"} fontWeight={400} color={"#000"} lineHeight={"normal"}>Business</Text>
                                <Text width={"264px"} color={"#8692A6"} fontSize={"14px"}>Own or belong to a company, this is for you.</Text>
                            </Box>
                        </Flex>

                    </Box>


                </Box>
            </Center>
        </Box>
    )
}

export default RightContentBox
