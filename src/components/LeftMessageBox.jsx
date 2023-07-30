import { Box, Center, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react';
import GreenTick from "../assets/Group.svg";
import Vector from "../assets/Vector 1.svg";
import DotGroup from "../assets/dott-Group (1).svg";

const LeftMessageBox = () => {
   
    return (
        <Box id='LeftBox' width={"666px"} height={"1024px"} color={"#FFF"} fontWeight={700}>

            <Heading padding={10} pl={30} fontSize={48}>
                MagSway
            </Heading>

            <Center>
                <Box width={473} fontSize={20} fontWeight={400} lineHeight={"38px"} fontFamily={"Gayathri"} >

                    <Flex justifyContent={"end"}>
                        <Img src={DotGroup} width={"59.995px"} height={"56px"} />
                    </Flex>

                    <Heading marginTop={150} color={"#00DAF7"} fontSize={"96px"} fontWeight={700} marginBottom={"-20px"}>“</Heading>

                    <Text className='msg'>
                        The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                    </Text>

                    <Text>
                        Vincent Obi
                        <Img src={GreenTick} width={"33.5px"} height={"33px"} />
                    </Text>

                    <Flex justifyContent={"end"}>
                        <Img src={Vector} width={20} />
                    </Flex>

                </Box>
            </Center>

        </Box>
    )
}

export default LeftMessageBox