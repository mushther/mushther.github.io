import React from 'react'
import { Box, Heading, Button, useMediaQuery } from '@chakra-ui/react'
import { FaFileAlt } from "react-icons/fa";
const Navbar = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

    const handleClick = (n) => {
        window.scrollTo({
            top: n,
            left: 0,
            behavior: 'smooth'
        });
    }
    //contact
    return (
        <Box w={'100%'} bg={'black'} position={'fixed'}>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                w='auto'
                m='auto'
                padding={4}
            >
                <Box>
                    <Heading fontSize={isLargerThan480 ? 25 : 17} fontFamily={'cursive'} onClick={() => handleClick(0)}>HUSSAIN</Heading >
                </Box>
                {isLargerThan480 ?
                    <Box
                        display='flex'
                        justifyContent="space-between"
                        alignItems='center'
                        w='40%'
                    >
                        <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(0)} >Home</Button >
                        <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(500)} >About</Button >
                        <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(1000)} >Skills</Button >
                        <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(1880)} >Projects</Button >
                        <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(4100)} >Contact</Button >
                        <Button colorScheme='yellow' fontSize={16} fontWeight={'bold'} gap={2} as='a' href='https://drive.google.com/file/d/1Y5zCHEVq8jYXvszYZY-HwaIwCzxPFFzl/view?usp=sharing'><FaFileAlt />Resume</Button>
                    </Box>
                    : null}
            </Box>
        </Box>
    )
}

export default Navbar