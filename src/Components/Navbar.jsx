import React from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import { FaFileAlt } from "react-icons/fa";
const Navbar = () => {
    return (
        <Box w={'100%'} bg={'hsla(0, 0%, 0%, 0.434)'}>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                w='100%'
                m='auto'
                padding={4}
            >
                <Box>
                    <Heading fontSize={25} >HUSSAIN</Heading >
                </Box>
                <Box
                    display='flex'
                    justifyContent="space-between"
                    alignItems='center'
                    w='40%'
                >
                    <Heading fontSize={18}>Home</Heading >
                    <Heading fontSize={18}>About</Heading >
                    <Heading fontSize={18}>Skills</Heading >
                    <Heading fontSize={18}>Projects</Heading >
                    <Heading fontSize={18}>Contact</Heading >
                    <Button colorScheme='yellow' fontSize={16} fontWeight={'bold'} gap={2}><FaFileAlt />Resume</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar