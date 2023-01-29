import { Box, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { FaArrowAltCircleLeft, FaBookOpen, FaGripLinesVertical, FaHome, FaInfoCircle, FaWhmcs } from 'react-icons/fa'
import { MdContactPhone } from "react-icons/md"
const Sidenav = () => {
    const [toggle, setToggle] = useState(false);
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');


    const handleToggle = () => {
        setToggle(true)
    }
    const handleToggle1 = () => {
        setToggle(false)
    }
    const handleClick = (n) => {
        window.scrollTo({
            top: n,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        toggle ?
            <Box
                position={'fixed'}
                transition='ease-in-out'
                transitionDuration={'1s'}
                top={220}
                display={'flex'}
                alignItems={'center'}
            >
                <Box
                    display={'grid'}
                    gap={4}
                    fontSize={'2xl'}
                    color={'yellow'}
                    p={3}
                    borderRight="4px solid yellow"
                    borderTop="0.1px solid yellow"
                    borderBottom="0.5px solid yellow"
                    borderRadius={"0px 20px 20px 0px"}
                    bg={'midnightblue'}
                >
                    <FaHome onClick={() => handleClick(0)} />
                    <FaInfoCircle onClick={() => handleClick(isLargerThan480 ? 500 : 600)} />
                    <FaBookOpen onClick={() => handleClick(isLargerThan480 ? 1000 : 1190)} />
                    <FaWhmcs onClick={() => handleClick(isLargerThan480 ? 1880 : 3080)} />
                    <MdContactPhone onClick={() => handleClick(isLargerThan480 ? 4100 : 5400)} />
                    <FaArrowAltCircleLeft onClick={handleToggle1} />
                </Box>
                <Box
                    onClick={handleToggle1}
                    bg={'midnightblue'}
                    color={'yellow'}
                    fontSize={'sm'}
                    m={0.3}
                    w={'5px'}
                    h={10}
                    border={'1px solid yellow'}
                    textAlign={'center'}
                    borderRadius={'0px 3px 3px 0px'}
                ></Box>

            </Box> :
            <Box
                onClick={handleToggle}
                position={'fixed'}
                transition='1s'
                top={300}
                display={'flex'}
                alignItems={'center'}
                bg={'midnightblue'}
                color={'yellow'}
                fontSize={'sm'}
                m={0.3}
                w={'15px'}
                h={20}
                border={'1px solid yellow'}
                textAlign={'center'}
                borderRadius={'0px 15px 15px 0px'}
            ><FaGripLinesVertical fontSize={20} /></Box>
    )
}

export default Sidenav