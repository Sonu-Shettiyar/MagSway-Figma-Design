import { Flex } from '@chakra-ui/react'
import React from 'react'
import LeftMessageBox from './LeftMessageBox'
import RightContentBox from './RightContentBox'

const Main = () => {
    return (
        <Flex justifyContent={"center"}  >
            <LeftMessageBox />
            <RightContentBox />
        </Flex>

    )
}

export default Main